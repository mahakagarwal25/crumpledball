class Paper {
    constuctor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            denstity:1.2
        }

        this.x=x;
        this.y=y;
        this.r=r
        this.images=loadImages("paper.png");
        this.body=Bodies.circle(this.x,this.y,(this.r=20/2,options))
        World.add(world,this.body);

    }
    display();
}
var paperPos=this.body.position;		

push()
translate(paperPos.x, paperPos.y);
rectMode(CENTER)
//strokeWeight(4);
fill(255,0,255)
imageMode(CENTER);
image(this.image,0,0,this.r,this.r)
pop()

