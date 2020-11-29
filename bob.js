class bob{
    constructor(x,y,width,height){
      var options = {
               
               density:1,
        
      }
    this.bob = Bodies.circle(x,y,width,height,options);
    this.width =width;
    this.height = height;                         
    World.add(world , this.bob)




    }
 
           



}