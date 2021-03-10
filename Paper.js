class Paper{
    constructor(x, y, radius){
        var options={
            isStatic: false,
            friction:0,
            density:1.2,
            restitution:0.3
        }
        
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
        
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("rgb(0,100,255)");
        stroke("rgb(0,100,255)");
        imageMode(RADIUS)
        image(this.image, 0,0, this.radius, this.radius);
        pop();
    }
}