class ground{
    constructor(x,y,w,h){
   
    ground_options={
    isStatic:true
    };
   
    this.body= Bodies.rectangle(x,y,w,h,ground_options)
    this.w=this.w;
    this.h=this.h;
    World.add(world,this.body)
    }

    display(){
    var pos = this.body.positions;
    push ();
    rectMode (CENTER);
    fill (127)
    rect(pos.x,pos.y,this.w,this.h)
    pop ()

    }
}