{
  const $canvas = document.querySelector(`#canvas`), ctx = $canvas.getContext(`2d`);
  let points = [];
  class Point {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
    static distance(p1, p2) {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }

  class Shape {
    constructor() {
      this.location = new Point();
      this.size = new Point(10, 10);
    }
    draw(color) {
      ctx.fillStyle = color;
      ctx.fillRect(this.location.x, this.location.y, this.size.x, this.size.y);
    }
    get area() {
      return this.size.x * this.size.y;
    }
  }

  class Circle extends Shape {
    constructor() {
      super();
      this.radius = 10;
    }
    draw(color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(this.location.x, this.location.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    }
    get area() {
      return this.radius * this.radius * Math.PI;
    }
    set area(value) {
      if (value <= 0) {
        return;
      }
      this.radius = value / (this.radius * Math.PI);
    }
  }

  const distance = (x1, x2, y1, y2) => {
    const a = x1 - x2;
    const b = y1 - y2;

    const c = Math.sqrt(a * a + b * b);
    return Math.round(c);
  };

  const handleClickBlack = () => {
    document.querySelector(`.black2`).src = `./assets/img/hout1wit3.png`;
    document.querySelector(`.goal-meter-saw`).checked = true;
  };

  const handleClickSaw = e => {
    e.target.classList.add(`opacity`);
    document.querySelector(`.interact-saw-meter-cursor`).classList.add(`saw-icon`);
    document.querySelector(`.black2 `).addEventListener(`click`, handleClickBlack);
  };

  const init = () => {
    const $canvastest = document.querySelector(`.canvas`);
    if ($canvastest) {
      const $canvas = document.querySelector(`#canvas`), ctx = $canvas.getContext(`2d`);

      const circleMouse = new Circle();
      circleMouse.radius = 5;

      const handleMousemoveCanvas = e => {
        ctx.clearRect(0, 0, $canvas.width, $canvas.height);
        circleMouse.location.x = e.offsetX;
        circleMouse.location.y = e.offsetY;
        circleMouse.draw(`#fae438`);
        points.forEach(point => {
          point.draw(`#fae438`);
        });
        if (points.length === 2) {
          ctx.beginPath();
          ctx.moveTo(points[0].location.x, points[0].location.y);
          ctx.lineTo(points[1].location.x, points[1].location.y);
          ctx.strokeStyle = `#fae438`;
          ctx.lineWidth = 5;
          ctx.stroke();
          const dist = distance(points[0].location.x, points[1].location.x, points[0].location.y, points[1].location.y) / 5;
          ctx.font = `30px Arial`;
          ctx.fillText(`${dist} cm`, ($canvas.width / 2) - 10, 30);
          $canvas.removeEventListener(`mousemove`, handleMousemoveCanvas);
          $canvas.removeEventListener(`click`, handleClickCanvas);
          document.querySelector(`.rolmeter`).classList.remove(`rolmeter-icon`);
          document.querySelector(`.goal-meter`).checked = true;

          document.querySelector(`.black2`).src = `./assets/img/hout1wit2.png`;
          document.querySelector(`.interact-saw-meter`).addEventListener(`click`, handleClickSaw);
        }
      };

      const handleClickCanvas = e => {
        const circle1 = new Circle();
        circle1.location.x = e.offsetX;
        circle1.location.y = e.offsetY;
        circle1.radius = 10;
        points.push(circle1);
      };

      document.querySelector(`.interact-rolmeter`).addEventListener(`click`, e => {
        $canvas.addEventListener(`mousemove`, handleMousemoveCanvas);
        $canvas.addEventListener(`click`, handleClickCanvas);
        document.querySelector(`.image-rolmeter`).classList.add(`display-none`);
        document.querySelector(`.rolmeter`).classList.add(`rolmeter-icon`);
      });
    }


  };
  init();
}
