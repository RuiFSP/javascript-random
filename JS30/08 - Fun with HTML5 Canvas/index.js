const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;
ctx.globalCompositeOperation = "multiply"; //for photoshot users - blends colors - cool

let isDrawing = false; //flag
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true; //flag

const draw = (e) => {
  if (!isDrawing) return; //stops the function from running when they are not moused down
  //console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY]; //ES6 trick - destructuring an array

  hue++; //increment hue to change our color, but if we got over 360 it goes back to the beginning -  similar to the polar coordenates in circunference

  if (hue >= 360) hue = 0;

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  direction ? ctx.lineWidth++ : ctx.lineWidth--;
};

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]; //updates for the x,y pressed
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
