class Umbrella {
    constructor(x, y, radius) {
        // var options = {
        //     isStatic : true,
        //     restuition : 0,
        //     friction : 1,
        //   }
		this.x=x;
        this.y=y;
        this.r = radius;
        this.body = Bodies.circle(x, y, radius);
    //   World.add(world, this.body)
        this.img = loadImage("Boyimg.png");
    }

    display() { 
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        imageMode(CENTER);
        image(this.img, 50, 475, 200, 400);
        pop();
    }
}

