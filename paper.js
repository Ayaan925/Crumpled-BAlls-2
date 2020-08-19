class Paper {
 constructor (x,y,radius){
    var options={
        isStatic : false,
        restitution: 0.3,
        friction: 0.5,
        density:1.2,
       
        }
    this.body = Bodies.circle(x,y,radius, options);
    World.add(world, this.body);
    this.radius = 2*radius;
    this.Image = loadImage("paper.png");
 }

 display(){
    var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.Image,0,0,this.radius, this.radius);
      pop();
 }
 





}

