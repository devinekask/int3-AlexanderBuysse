import './style.css';
import Splide from '@splidejs/splide';
{
  const handleDragoverInteract = e => {
    e.preventDefault();
    console.log(`grab`);
  };

  const handleDragenterWood = e => {
    console.log(e.target);
  };


  const init = () => {
    const $slider = document.querySelector(`.splide`);
    if ($slider) {
      new Splide(`#image-slider`, {
        width: '70vw',
        height: `auto`,
      }).mount();
    }

    const $interactField = document.querySelector(`.step-interact__yellowLine`);
    if ($interactField) {
      $interactField.addEventListener(`dragover`, handleDragoverInteract);
    }

    const $wood = document.querySelector(`.step-interact__wood`);
    if ($wood) {
      $wood.addEventListener(`dragenter`, handleDragenterWood);
    }
  };

  init();

}

