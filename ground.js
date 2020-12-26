class Ground
{
    constructor(x,y,width)
    {
        var options = 
        {
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = 20;

        this.body = Bodies.rectangle(x,y,width,20, options);
        World.add(world,this.body);

    }
    
    display()
    {
        var pos = this.body.position;
       
        rectMode(CENTER);
        fill("grey");
        rect(pos.x,pos.y,this.width,this.height);
    }
}

