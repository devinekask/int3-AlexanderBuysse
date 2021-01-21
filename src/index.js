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

  const handleInputInput = e => {
    const maxLength = e.target.getAttribute(`maxlength`);
    const $counter = e.target.parentElement.querySelector(`.label-counter`);
    const valueLength = e.target.value.length;
    const leftCharLength = maxLength - valueLength;

    if (leftCharLength < 0) return;
    $counter.innerText = leftCharLength;
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

    const inputs = document.querySelectorAll(`.label-input`);
    if (inputs) {
      inputs.forEach(input => {
        const maxLength = input.getAttribute(`maxlength`);
        const $counter = input.parentElement.querySelector(`.label-counter`);
        $counter.innerText = maxLength;
        input.addEventListener(`input`, handleInputInput);
      });
    }
  };

  init();

}

