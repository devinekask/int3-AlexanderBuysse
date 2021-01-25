{

  let dragSrcEl = null;

  const handleDragStart = e => {
    console.log(e.target);
    e.target.style.opacity = '0.4';
    dragSrcEl = e.target;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  };

  const handleDragOver = e => {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
  };

  const handleDragEnter = e => {
    e.target.classList.add('over');
  };

  const handleDragLeave = e => {
    e.target.classList.remove('over');
  };

  const handleDrop = e => {
    console.log(e.target, `een`);

    if (dragSrcEl !== e.target) {
      dragSrcEl.innerHTML = e.target.innerHTML;
      if (dragSrcEl.classList[1] === `box-image`) {
        dragSrcEl.classList.remove(`box-image`);
        e.target.classList.add(`box-image`);
        gevolgenBoxImage(e);
      } else if (e.target.classList[1] === `box-image`) {
        dragSrcEl.classList.add(`box-image`);
        e.target.classList.remove(`box-image`);
        gevolgenBoxImage(e);
      } else if (dragSrcEl.classList[1] === `box-image-two`) {
        dragSrcEl.classList.remove(`box-image-two`);
        e.target.classList.add(`box-image-two`);
      } else if (e.target.classList[1] === `box-image-two`) {
        dragSrcEl.classList.add(`box-image-two`);
        e.target.classList.remove(`box-image-two`);
      }
    }

    return false;
  };

  const gevolgenBoxImage = e => {
    e.target.innerHTML = e.dataTransfer.getData('text/html');
    const image = document.querySelector(`.boxtarget`).classList.contains(`box-image`);
    if (image) {
      document.querySelector(`.zeil`).src = `./assets/img/zeil-interactie.png`;
    }
    const checks = document.querySelectorAll(`.check-zeil`);
    checks.forEach(check => {
      check.checked = true;
    });
  };

  const handleDragEnd = e => {
    e.target.style.opacity = '1';
    const items = document.querySelectorAll('.container .box');
    items.forEach(item => {
      item.classList.remove('over');
    });
  };

  const handleClick = () => {
    const number = parseInt(document.querySelector(`.image-saw-step`).getAttribute(`id`));
    const firstStep = document.querySelector(`.beyond`);

    if (number === 11) {
      document.querySelector(`.wood-incomplete`).src = `./assets/img/wood1.png`;
      document.querySelector(`.check-hout1`).checked = true;

      //niewue cirkel
      const woodTop = document.querySelector(`.wood-top`);
      woodTop.removeEventListener(`click`, handleClick);
      woodTop.classList.remove(`wood-top`);
      document.querySelector(`.step-interact__circle-two`).innerHTML = `<div class="wood-top wood-top2"><img class="wood-incomplete wood-incomplete-small" src="./assets/img/hout-staptwee-klein.png" alt="hout klein" width="75"></div>`;
      document.querySelector(`.step-interact__circle-two`).classList.remove(`dashed`);
      document.querySelector(`.wood-top2`).addEventListener(`click`, handleClick);
      document.querySelector(`.step-interact__circle-two`).classList.add(`wood-incomplete-two`);
      document.querySelector(`.step-interact__circle-one`).classList.remove(`z-prior`);
    }
    if (number === 15) {
      document.querySelector(`.wood-incomplete-small`).src = `./assets/img/houtklein.png`;
      document.querySelector(`.check-hout2`).checked = true;
      document.querySelector(`.wood-top2`).removeEventListener(`click`, handleClick);
      const saw = document.querySelector(`.step-saw`);
      saw.parentElement.removeChild(saw);
    }
    if (firstStep === null) {
      document.querySelector(`.step-saw`).classList.add('step-saw1');
      document.querySelector(`.step-saw`).classList.add('beyond');
      document.querySelector(`.image-saw-step`).setAttribute(`id`, number);
    } else {
      newStep(number);
      document.querySelector(`.image-saw-step`).setAttribute(`id`, number + 1);
    }
  };

  const newStep = step => {
    document.querySelector(`.step-saw${step}`).classList.add(`step-saw${step + 1}`);
    document.querySelector(`.step-saw${step + 1}`).classList.remove(`step-saw${step}`);
  };

  const handleClickSawButton = e => {
    document.querySelector(`.step-interact__circle-one`).innerHTML = `<div class="wood-top"><img class="wood-incomplete" src="./assets/img/wood-inproges.png" alt="" width="150"></div>`;
    document.querySelector(`.step-interact__wood`).innerHTML += `<div class="step-saw" ><img src="./assets/img/zaagdraai.png" class="image-saw-step" id="1" width="100" alt=""></div>`;
    document.querySelector(`.step-interact__circle-one`).classList.remove(`dashed`);
    e.target.parentElement.removeChild(e.target);
    const saw = document.querySelector(`.step-saw`);
    saw.addEventListener(`click`, handleClick);
    const woodTop = document.querySelector(`.wood-top`);
    woodTop.addEventListener(`click`, handleClick);
  };

  const handleClickSequence = () => {
    const interval = setInterval(newImage => {
      const $serie = document.querySelector(`.serie`);
      const number = parseInt($serie.getAttribute(`id`));
      const $button = document.querySelector(`.pos-hand4`);
      if ($button) {
        $button.parentElement.removeChild($button);
      }
      $serie.src = `./assets/videoserie/s${number}.png`;
      $serie.setAttribute(`id`, number + 1);

      if (number > 12) {
        clearInterval(interval); // If exceeded 100, clear interval
        document.querySelector(`.goal-serie`).checked = true;
      }
    }, 500);
  };

  const handleClickStory = e => {
    e.preventDefault();
    let count = parseInt(e.target.getAttribute(`name`));
    const $message = document.querySelector(`.section__message`);
    const $buttonTwo = document.querySelector(`.story-button-two`);
    if (count === 2) {
      console.log(count);
      $message.textContent = `Sommige problemen kan ik jammer genoeg niet oplossen maar ik heb gehoord dat een hovercraft bouwen therapeutisch werkt.`;
      $buttonTwo.textContent = `Naar stap 1`;
      $buttonTwo.href = `index.php?page=tutorial#een`;
      e.target.parentElement.removeChild(e.target);
    }
    if (count === 1) {
      console.log(count);
      $message.textContent = `Oei, wat is er? Heb je niet alle benodigdheden?`;
      $buttonTwo.textContent = `Naar shop`;
      $buttonTwo.href = `index.php?page=shop`;
      e.target.setAttribute(`name`, 2);
      console.log(e.target);
      e.target.textContent = `Toch wel`;
    }
  };

  const handleKeydownDocu = e => {
    let number = parseInt(document.querySelector(`.count-scroll`).getAttribute(`name`));
    if (number === 0) {
      document.querySelector(`.count-scroll`).setAttribute(`name`, number + 1);
    } else if (number === 6) {
      return;
    } else {
      document.getElementById(number).scrollIntoView({
        behavior: 'smooth'
      });
      document.querySelector(`.count-scroll`).setAttribute(`name`, number + 1);
    }
  };

  const init = () => {
    const $sequence = document.querySelector(`.sequence`);
    if ($sequence) {
      $sequence.addEventListener(`click`, handleClickSequence);
    }

    const tutorial = document.querySelector(`.tutorial`);
    if (tutorial) {
      document.addEventListener('keydown', handleKeydownDocu);
    }

    const sawButton = document.querySelector(`.step-interact__image`);
    if (sawButton) {
      sawButton.addEventListener(`click`, handleClickSawButton);
    }

    const dragItems = document.querySelectorAll('.container .box');
    dragItems.forEach(item => {
      item.addEventListener('dragstart', handleDragStart);
      item.addEventListener('dragenter', handleDragEnter);
      item.addEventListener('dragover', handleDragOver);
      item.addEventListener('dragleave', handleDragLeave);
      item.addEventListener('drop', handleDrop);
      item.addEventListener('dragend', handleDragEnd);
    });

    const $storyButton = document.querySelector(`.story-button-one`);
    if ($storyButton) {
      $storyButton.addEventListener(`click`, handleClickStory);
    }
  };
  init();
}
