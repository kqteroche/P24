class Paper { 
    constructor(x, y) { 
        var options = { 
        'isStatic':false,
        restitution:0.3,
        friction:0.5, 
        density:1.2 
    }
        this.radius = 17; 
        this.body = Bodies.circle(x, y, 17, options);
            
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
        stroke("pink"); 
        
        fill("pink"); 
        ellipse(0, 0, 15, 15); 
        pop(); 
    }
             };