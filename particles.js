class Particle{
    constructor(){
        var options = {

        }
    }
    
    display(){

        if (particles!=null){

            particles.display();
            if(particles.body.position.y > 760){

              
                if(particles.body.position.x < 300){
                    score = score+100;
                    particles = null;
                    if(count>5) gamestate ="end"
                }
                else if(particles.body.position.x < 600 && particle.body.position.x > 301){
 
                }
            }
        }
    }
}