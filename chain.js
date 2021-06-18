class Chain{
     constructor(bodyA,bodyB){

        var options={
            length:10,
            stiffness:0.04,
            bodyA:bodyA,
            bodyB:bodyB
        
        }
    this.chain=Matter.Constraint.create(options)
    
     World.add(world,this.chain)
     }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
       push()
       strokeWeight(6)
       stroke("green")
       line(pointA.x,pointA.y,pointB.x,pointB.y);
       pop()
       
    }

    
}

