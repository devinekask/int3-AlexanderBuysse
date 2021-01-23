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
      this.style.opacity = '0.4';
      dragSrcEl = this;

      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    };

    const handleDragOver = e => {
      if (e.preventDefault) {
        e.preventDefault();
      }

      e.dataTransfer.dropEffect = 'move';

      return false;
    };

    const handleDragEnter = e => {
      this.classList.add('over');
    };

    function handleDragLeave(e) {
      this.classList.remove('over');
    }

    function handleDrop(e) {
      if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
      }
      console.log(this);

      if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }

      return false;
    }

    function handleDragEnd(e) {
      this.style.opacity = '1';

      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }

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
