class SlingShot{
    constructor(bodyA, position){
        var options = {
            bodyA: bodyA,
            pointB: position,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = position
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}