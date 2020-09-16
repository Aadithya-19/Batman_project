class Drops {
    constructor(x, y, radius) {
      
        var options = {
          // isStatic : true,
          // restuition : 0,
          friction : 0.1,
        }
      
      this.x = x;
      this.y = y; 
      this.r = radius;
      this.body = Bodies.circle(x, y, radius, options);
      World.add(world, this.body);
    }
    display(){  
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      fill("blue");
      ellipse(0,50, this.r, this.r);
      pop();
    }
    update (){
      if (this.body.position.y > height){}
      Matter.Body.setPosition(this.body, {x : random(0, 400), y : random(0, 800)});
    }
}