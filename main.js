let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.strokeStyle = "#0000ff";
ctx.beginPath();
// color declared before figure defined
ctx.moveTo(20,30);
ctx.lineTo(100,30);
ctx.lineTo(100,60);
ctx.lineTo(20,60);
//closePath(); will calculate the last line of the figure
ctx.closePath();
ctx.lineTo(20,30);
ctx.fillStyle = "#0000ff";
ctx.fill();
/*
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 50, 50);
*/
