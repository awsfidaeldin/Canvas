let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

//Resize the Window
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let radius = 30;
//Draw 100 Circles in different positions
for(let i=0;i<100;i++)
{
    let x=Math.random()*innerWidth;
    let y=Math.random()*innerHeight;
    context.beginPath();
    context.fillStyle='red';
    context.strokeStyle='blue';
    context.arc(x,y,radius,0,2*Math.PI);
    context.fill();
    context.stroke();
}
