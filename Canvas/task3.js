let canvas=document.querySelector("canvas");
let context=canvas.getContext("2d");

//Resize the Window
canvas.width=window.innerWidth;
canvas.height=window.innerWidth;

//Create a mouse object
let mouse= 
{
    x : undefined , 
    y : undefined
}
//Add the mouse listener
window.addEventListener('mousemove',
function(event)
{
    console.log(event);
    mouse.x = event.x;
    mouse.y = event.y;
})

colorCircle=['red','blue','green','yellow','orange','black','brown','pink','purple','grey'];

//Create a Circle class that will hold the 
//circle's properties and that will allow you to draw and update the circle.
function Circle(x,y,dx,dy,radius)
{
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.dx=dx;
    this.dy=dy;
//Create the method that allows you to draw the circle inside the Circle class
    this.draw=function()
    {
        context.beginPath();
        context.fillStyle=colorCircle[Math.floor(Math.random()*colorCircle.length)];
        console.log(colorCircle);
        context.strokeStyle='blue';
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.fill();
        context.stroke();        
    }
//Modify the update method inside the circle to update the 
//size of the circle if the mouse is inside or close to the circle 
    this.update=function()
    {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0)
        {
            this.dx = - this.dx;
        }

        if(this.y + this.radius > innerWidth || this.y - this.radius < 0)
        {
            this.dy = - this.dy;
        }

        this.x+=this.dx;
        this.y+=this.dy;

        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50)
        {
            if(this.radius < 40)
            {
                this.radius = this.radius + 1;
            }
        }

        else if(this.radius > 5)
        {
            this.radius = this.radius - 1;
        }

        this.draw();
    }
}
//Create an array called arrayCircles that will hold the circles that you will be generating
    let arrayCircle = [];
    for(let i=0;i<100;i++)
    {
        let x = Math.random() * innerWidth;
        let y = Math.random() * innerHeight;
        let radius = 30;
        let dx = Math.random() - 0.5;
        let dy = Math.random() - 0.5;

        arrayCircle.push(new Circle(x,y,dx,dy,radius));
        console.log(arrayCircle);
    }
//Create the following function  that will help you animate, 
    function animate()
    {
        requestAnimationFrame(animate);
        context.clearRect(0,0,innerWidth,innerHeight);
        for(let i = 0 ; i<arrayCircle.length;i++)
        {
            arrayCircle[i].update();
        }
    }

    animate();

