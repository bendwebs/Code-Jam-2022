class GroundObject {

    constructor(x,y) {

        this.x = x;
        this.y = y
    
        const rockGround = add([
            sprite("ground"),
            scale(.09),
            pos(this.x,this.y)
        ])
    }

    addGround(self) {
        const ground2 = add([
            sprite("ground"),
            pos(this.x,this.y),
            area(),
            solid(),
        ])
        return (ground2)
    }
}

