{
  const handleDragoverInteract = e => {
    e.preventDefault();
    console.log(`grab`);
  };

  const handleDragenterWood = e => {
    console.log(e.target);
  };

  const init = () => {
    //tutorial
    const $interactField = document.querySelector(`.step-interact__yellowLine`);
    if ($interactField) {
      $interactField.addEventListener(`dragover`, handleDragoverInteract);
    }

    const $wood = document.querySelector(`.step-interact__wood`);
    if ($wood) {
      $wood.addEventListener(`dragenter`, handleDragenterWood);
    }

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

      if (dragSrcEl != e.target) {
        dragSrcEl.innerHTML = e.target.innerHTML;
        if (dragSrcEl.classList[1] === `box-image`) {
          dragSrcEl.classList.remove(`box-image`);
          e.target.classList.add(`box-image`);
        } else {
          dragSrcEl.classList.add(`box-image`);
          e.target.classList.remove(`box-image`);
        }
        e.target.innerHTML = e.dataTransfer.getData('text/html');
      }

      return false;
    };

    const handleDragEnd = e => {
      e.target.style.opacity = '1';
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    };

    const items = document.querySelectorAll('.container .box');
    items.forEach(item => {
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
