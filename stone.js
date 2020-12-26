class Stone
{
    constructor(x,y,width,height)
    {
        var options =
        {
            isStatic: true,
            restitution: 0,
            friction: 1,
            density:1.2

        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.image = loadImage("stone.png");

        World.add(world, this.body);

    }

    
    display()
    {
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    }
}