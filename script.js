const canvas = document.querySelector('.canvas1');
const ctx = canvas.getContext('2d');

// JavaScriptの、CanvasオブジェクトのgetContext()は、キャンパスに描画するためのコンテキスト(CanvasRenderingContext2Dオブジェクトなど)を取得するメソッドです。
// 引数にコンテキストの種類を指定します。二次元グラフィックを描画するための2d、
// 三次元グラフィックスを描画するためのwebglが主な引数です。

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

// マウス

const mouse = {
  x: null,
  y: null,
  radius: 150
}

window.addEventListener('mousemove',(event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse.x, mouse.y);
});

ctx.fillStyle = 'white';
ctx.font ='30px Verdana';
ctx.fillText('A', 0, 30);
const data = ctx.getImageData(0,0,100,100);


class Particle {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = (Math.random() * 30) + 1;
  }
  draw() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

const init = () => {
  particleArray = [];
  for (let i = 0; i < 500; i++ ) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    particleArray.push(new Particle(x,y));

  }
  // particleArray.push(new Particle(50,50));
  // particleArray.push(new Particle(80,50));
}

init();
console.log(particleArray);

const animate = () => {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].draw();
  }
  requestAnimationFrame(animate);
}

animate();