class Chain {
constructor(bodyA, bodyB){
   //these are the properties while creating constraint
    var options={
     bodyA:bodyA,
     bodyB:bodyB,
     length:10,
     stiffness:0.04
    }
    //creating Constraint here
    this.chain = Constraint.create(options)
    World.add(world, this.chain);
}
display(){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    strokeWeight(4);
    //a line is visible to show connection between bodyA and bodyB 
    line(pointA.x,pointA.y,pointB.x,pointB.y);

}
}