var canvas, ctx;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var ball;

// Velocity x
var vx;
// Velocity y
var vy;

var gravity = 0.1;  
var bounce = 0.7; 
var xFriction = 0.1;

// Ball Properties
function initn(){
	vy = Math.random() * -3;
	if ((vx = Math.random() * 10) >5) {
		vx = Math.random() * 10
	} else {
		vx = Math.random() * -10
	}
	
	ball = {x:500, y:100, radius:20, color:"red"};
}

initn();

//Draw Cirlce with Ball Properties
function draw() {
	ctx.clearRect(0,0,1280,720); //cleaning rectangle in 1280x720px range
	ctx.beginPath();
	// Coordinates X, Y, Radius, Srat Angle on 3 o'Clock, End Angle 2 Pi (Full Circle)
	ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2); 
	ctx.fillStyle = "red";   //Color
	ctx.fill();	

// Call for Movement Function
ballMovement();
}

// Call draw Every 16.6 milliseconds (60FPS)
setInterval(draw, 1000/60); 

function ballMovement(){
	ball.x += vx;
	ball.y += vy;
	vy += gravity
	
	// Wall Hit Detection
	if (ball.x + ball.radius > 1280 || ball.x - ball.radius < 0){
		vx *= -1;
	}

	//Floor Hit Detection
	if (ball.y + ball.radius > 720){
		vy *= -bounce;
		ball.y = 720 - ball.radius; //Teleport Ball Up after Hit so it don't Stuck
	if (vy>-0.5 && vy<0) // if Vertical Velocity of Ball in This Range, it's moving too slow and need to stop. Otherwise it's gonna bouce indefinitely
	vy=0;
		if (vx>-0.5 && vx<0.5) // Same as Vertical Velocity only it's Horizontal
		vx=0
// Calling Friction Function
xF();
	}
}


// Friction Function. Necessary to slow down the ball
function xF(){
	if(vx>0)
		vx = vx - xFriction;
	if(vx<0)
		vx = vx + xFriction;
}