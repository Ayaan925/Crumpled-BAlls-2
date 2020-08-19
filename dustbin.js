  class Dustbin{
      constructor(){
          var options={
                isStatic:true,
          }
          //this.body1Sprite = createSprite(500,610,20,100);
          //this.body2Sprite = createSprite(300,610,20,100);
          //this.body3Sprite = createSprite(400,650,200,20);
          this.body1 = Bodies.rectangle(500, 610, 20, 100 , {isStatic:true} );
          this.body2 = Bodies.rectangle(300, 610, 20, 100 , {isStatic:true} );
          this.body3 = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
          World.add(world, this.body1);
          World.add(world, this.body2);
          World.add(world, this.body3);	
          this.Image = loadImage("dustbingreen.png");
      }
  
      



display(){
   imageMode(CENTER);
   image(this.Image, 400,610,200,100);
}
}