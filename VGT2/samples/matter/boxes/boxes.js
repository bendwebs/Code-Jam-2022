class Box {

    constructor(x = null, y = null) {

        this.damage = 0;

        if (x) {
            this.x = x;
        } else {
            this.x = Math.round(Matter.Common.random(0,600));
        }
        if (y) {
            this.y = y;
        } else {
            this.y = Math.round(Matter.Common.random(0,600));
        }


        this.options = {
            friction: .001,
            restitution: 0,
            angle: 220,
            speed: Math.round(Matter.Common.random(0,10))*this.wsize
        }

        this.wsize = Math.round(Matter.Common.random(50,75));
        this.hsize = Math.round(Matter.Common.random(20,75));

        let tempObject = Matter.Bodies.rectangle(this.x,this.y,this.wsize,this.hsize,this.options);
        blocks.push(tempObject);
    }

}