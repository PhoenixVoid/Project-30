class Drops{
    constructor(x, y){

        var options = {
            friction : 0.01,
            restitution : 0.1
        }

        this.rain = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        this.x = x;
        this.y = y;
        World.add(world, this.rain);

    }

    updateY(){
    
        if(this.rain.position.y > height) {

            Matter.Body.setPosition(this.rain, {x : random(0,400), y : random(0, 400)})

        }
    }

    display(){

        fill(0, 0, 255);
        ellipseMode(CENTER);
        ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
        
    }
}

    