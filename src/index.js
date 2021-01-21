import './style.css';
import Splide from '@splidejs/splide';
{
  const kits = [
    {
      name: `grondstof`,
      html: `<li class="shop-basket__item grondstof"><a id="grondstof" href="" class="remove">x</a> <p>Grondstof kit</p><img src="./assets/img/grondstof.png" alt="schild" width="50"></li>`,
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

  const handleDragoverInteract = e => {
    e.preventDefault();
    console.log(`grab`);
  };

  const handleDragenterWood = e => {
    console.log(e.target);
  };

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

          //eventlistener voor verwijderen
          const removeButtons = document.querySelectorAll(`.remove`);
          if (removeButtons) {
            removeButtons.forEach(removeButton => {
              removeButton.addEventListener(`click`, handleClickRemoveButton);
            });
          }
        }
      }
    });
  };

  const handleClickRemoveButton = e => {
    e.preventDefault();
    const kitName = e.target.getAttribute(`id`);
    kits.forEach(kit => {
      if (kit.name === kitName) {
        const $basket = document.querySelector(`.shop-basket__items`);
        const containsKit = document.querySelector(`.${kitName}`);
        if (containsKit) {
          $basket.removeChild(e.target.parentElement);
          changePrice(- kit.price);
          changeKits(kit.name);
        }
      }
    });
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


  const init = () => {
    const $slider = document.querySelector(`.splide`);
    if ($slider) {
      new Splide(`#image-slider`, {
        width: '70vw',
        height: `auto`,
      }).mount();
    }


    //tutorial
    const $interactField = document.querySelector(`.step-interact__yellowLine`);
    if ($interactField) {
      $interactField.addEventListener(`dragover`, handleDragoverInteract);
    }

    const $wood = document.querySelector(`.step-interact__wood`);
    if ($wood) {
      $wood.addEventListener(`dragenter`, handleDragenterWood);
    }


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

    const removeButtons = document.querySelectorAll(`.remove`);
    if (removeButtons) {
      removeButtons.forEach(removeButton => {
        removeButton.addEventListener(`click`, handleClickRemoveButton);
      });
    }
  };

  init();

}

