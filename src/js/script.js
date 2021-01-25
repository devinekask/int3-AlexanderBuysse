{
  const kits = [
    {
      name: `grondstof`,
      html: `<li name="grondstof" class="shop-basket__item grondstof"><a id="grondstof" href="" class="remove">x</a> <p>Grondstof kit</p><img src="./assets/img/grondstof.png" alt="schild" width="50"></li>`,
      price: 20
    },
    {
      name: `tool`,
      html: `<li class="shop-basket__item tool"><a id="tool" href="" class="remove"><span>x</span></a><p>Gereedschap kit</p><img src="./assets/img/hamer.png" alt="hamer" width="40"></li>`,
      price: 80
    },
    {
      name: `veiligheid`,
      html: `<li class="shop-basket__item veiligheid"><a id="veiligheid" href="" class="remove"><span>x</span></a><p>Veiligheids kit</p><img src="./assets/img/schild.png" alt="schild" width="80"></li>`,
      price: 30
    }
  ];

  //shop
  const handleInputInput = e => {
    const maxLength = e.target.getAttribute(`maxlength`);
    const $counter = e.target.parentElement.querySelector(`.label-counter`);
    const valueLength = e.target.value.length;
    const leftCharLength = maxLength - valueLength;

    if (leftCharLength < 0) return;
    $counter.innerText = leftCharLength;
  };

  const handleClickShopbutton = e => {
    e.preventDefault();
    const kitName = e.target.getAttribute(`id`);
    kits.forEach(kit => {
      if (kit.name === kitName) {
        const $basket = document.querySelector(`.shop-basket__items`);
        const containsKit = document.querySelector(`.${kitName}`);
        if (containsKit === null) {
          $basket.innerHTML += kit.html;
          changePrice(kit.price);
          changeKits(kit.name);
          changeButton(false, e.target);
        } else {
          $basket.removeChild(containsKit);
          changePrice(- kit.price);
          changeKits(kit.name);
          changeButton(true, e.target);
        }

        //eventlistener voor verwijderen
        const removeButtons = document.querySelectorAll(`.remove`);
        if (removeButtons) {
          removeButtons.forEach(removeButton => {
            removeButton.addEventListener(`click`, handleClickRemoveButton);
          });
        }
      }
    });
  };

  const handleClickRemoveButton = e => {
    e.preventDefault();
    console.log(`klik`);
    let kitName = e.target.getAttribute(`id`);
    if (kitName === null) {
      kitName = e.target.parentElement.getAttribute(`id`);
    }
    kits.forEach(kit => {
      if (kit.name === kitName) {
        const $basket = document.querySelector(`.shop-basket__items`);
        const containsKit = document.querySelector(`.${kitName}`);
        console.log(containsKit);
        if (containsKit) {
          console.log(`werkt`);
          $basket.removeChild(containsKit);
          changePrice(- kit.price);
          changeKits(kit.name);
          const target = document.getElementById(`${kit.name}`);
          changeButton(true, target);
        }
      }
    });
  };

  const changeButton = (bool, target) => {
    if (bool === false) {
      target.textContent = `Uit winkelkar`;
      target.classList.add(`shop-button-red`);
    }
    if (bool === true) {
      console.log(target);
      target.textContent = `In winkelkar`;
      target.classList.remove(`shop-button-red`);
    }
  };

  const changePrice = price => {
    document.querySelector(`.price`).value = parseInt(document.querySelector(`.price`).value) + price;
    document.querySelector(`.price-total`).textContent = parseInt(document.querySelector(`.price-total`).textContent) + price;
  };

  const changeKits = kitName => {
    const inputKit = document.querySelector(`.kit${kitName}`);
    let value = inputKit.getAttribute(`value`);
    console.log(value);
    value = 1 - parseInt(value);
    inputKit.setAttribute(`value`, value);
  };

  //order handelen
  const formdataToJson = $from => {
    const data = new FormData($from);
    const obj = {};
    data.forEach((value, key) => {
      console.log(`${key} : ${value}`);
      obj[key] = value;

    });
    return obj;
  };

  const handleOrderSubmit = e => {
    const $form = e.currentTarget;
    e.preventDefault();
    postOrder($form.getAttribute('action'), formdataToJson($form)); // object opmaken
  };

  const postOrder = async (url, data) => {

    const response = await fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    });

    const returned = await response.json();
    console.log(returned);
    const $shopBanner = document.querySelector(`.shop-banner`);
    if (returned.error) {
      console.log(``);
      $shopBanner.textContent = `Dit liep fout: ${Object.values(returned)}`;
      $shopBanner.classList.add(`shop-banner-red`);
    } else {
      $shopBanner.textContent = `Bestelling is geslaagd (id: ${returned.id})`;
      $shopBanner.classList.add(`shop-banner-green`);
    }
  };
  //shop


  const init = () => {

    //shop
    const inputs = document.querySelectorAll(`.label-input`);
    if (inputs) {
      inputs.forEach(input => {
        const maxLength = input.getAttribute(`maxlength`);
        const $counter = input.parentElement.querySelector(`.label-counter`);
        $counter.innerText = maxLength;
        input.addEventListener(`input`, handleInputInput);
      });
    }

    const shopButtons = document.querySelectorAll(`.shop-button`);
    if (shopButtons) (
      shopButtons.forEach(shopButton => {
        shopButton.addEventListener(`click`, handleClickShopbutton);
      })
    );

    // const removeButtons = document.querySelectorAll(`.remove`);
    // if (removeButtons) {
    //   removeButtons.forEach(removeButton => {
    //     removeButton.addEventListener(`click`, handleClickRemoveButton);
    //   });
    // }

    const $shopForm = document.querySelector(`.shop-form`);
    if ($shopForm) {
      $shopForm.addEventListener('submit', handleOrderSubmit);
    }
  };

  init();

}
