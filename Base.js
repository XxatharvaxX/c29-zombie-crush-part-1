class Base
{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        World.add(world,this.body);

    }

    display()
    {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}