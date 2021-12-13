let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

//Resize the Window
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

//Generate randomly the properties of a circle and the Velocity
let x=Math.random() * innerWidth;
let y=Math.random() * innerHeight;
let radius = 30;
let dx=(Math.random() - 0.5) * 10;
let dy=(Math.random() - 0.5) * 10;

//Function that will help in animation by calling itself. 
function animate()
{
//Begin a new path or reset the path
    context.beginPath();
    requestAnimationFrame(animate);
//Clear the Canvas
    context.clearRect(0,0,innerWidth,innerHeight);
    context.strokeStyle='blue';
    context.fillStyle='red';
    context.arc(x,y,radius,0,2*Math.PI);
    context.fill();
    context.stroke();
//Make sure that the animation will be done within the visual area of the canvas
    if( x + radius > innerWidth || x - radius < 0)
    {
        dx = -dx;
    }

    if (y + radius > innerHeight || y - radius < 0)
    {
        dy = -dy;
    }

    x+=dx;
    y-=dy;
}

animate();

