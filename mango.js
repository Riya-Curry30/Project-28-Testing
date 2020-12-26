class Mango
{
    constructor(x,y, r)
    {
      var options = 
      {
          isStatic: true,
          restitution: 0,
          friction:1
      }  
      
      
      this.body = Bodies.circle(x,y,r, options);
      this.x = x;
      this.y = y;
      this.r = r;
      

      this.image = loadImage("mango.png");
      World.add(world, this.body);
    }

    display()
    {
        image(this.image,this.body.position.x, this.body.position.y, 60, 70);
    }
}