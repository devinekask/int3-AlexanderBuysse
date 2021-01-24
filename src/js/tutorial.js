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
      } else {
        dragSrcEl.classList.add(`box-image`);
        e.target.classList.remove(`box-image`);
      }
      e.target.innerHTML = e.dataTransfer.getData('text/html');
      const image = document.querySelector(`.boxtarget`).classList.contains(`box-image`);
      if (image) {
        document.querySelector(`.zeil`).src = `./assets/img/zeil-interactie.png`;
      }
      const checks = document.querySelectorAll(`.check-zeil`);
      checks.forEach(check => {
        check.checked = true;
      });
    }

    return false;
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

  const init = () => {

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
  };
  init();
}
