
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
//you will be requiring one more matter.js 
//function called as Matter.Render


// create the varibales for the dustbin,paper and ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//Use the classes of ground,paper and dustbin to create the objects
	//use the hint given to you in the PDF of the project


	//writing the code  for render here
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  })
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
//display the ground,paper and dustbin objects here
  
 
}

//check out hint no.4 and write the code of function key pressed here

