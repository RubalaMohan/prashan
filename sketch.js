const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var createCanvas, engine, world;

function preload(){

}

function setup(){
    createCanvas(1300, 600);

    engine=Engine.create();
    world=engine.world;

    ground=new Ground(width/2,620,width,200);
    paper=new Paper(250, 510, 50,50);

    // left=new Dustbin(800, 460, 20, 150);
    // right=new Dustbin(1000, 460, 20, 150);
    // bottom=new Dustbin(900, 530, 200, 20);

    dustbin_image=new Dustbin(900, 520);

    Engine.run(engine);
}

function draw(){
    background(220);
    Engine.update(engine);

    
    paper.display();
    ground.display();
    

    // left.display();
    // right.display();
    // bottom.display();

    dustbin_image.display();

}

function keyPressed(){
    if (keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body, paper.body.position, {x:200,y:-300});
    }
}