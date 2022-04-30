class Block{
    constructor(x,y,w,h,color){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.color=color

        var options={
        isStatic : true
        }

        this.body= Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body)

    }
    display(){
        var pos = this.body.position 
        var angle = this.body.angle
        push()
        fill(this.color)
        noStroke();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()    


    }





















}