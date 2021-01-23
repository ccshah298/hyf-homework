//Lets make some art using classes-----ex
//Paint a circle to a canvas element.
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(800, 500, 100, 0, 2 * Math.PI);
ctx.stroke();
//When you have added a normal circle, try filling it out so it has a color.
ctx.fillStyle = "red";
ctx.fill();

//Class creation time!----------ex
//Lets create a class called Circle.
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.fillColor;
    ctx.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle * Math.PI,
      this.fillColor
    );
    ctx.fillStyle = this.fillColor;
    ctx.stroke();
    ctx.fill();
  }
}
const doCircle = new Circle(50, 50, 20, 0, 2 * Math.PI, "blue");
doCircle.draw();

// Now lets make art. Every 100ms create a new circle with random x,y,r and colour
setInterval(() => {
  const doCircle = new Circle(
    Math.floor(Math.random() * ctx.canvas.width),
    Math.floor(Math.random() * ctx.canvas.height),
    Math.floor(Math.random() * 30),
    0,
    2 * Math.PI,
    "#" + Math.floor(Math.random() * 0xffffff).toString(16)
  );
  doCircle.draw();
}, 100);
