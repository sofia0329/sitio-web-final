let particles = []; 
let gathering = true; 

function setup() {
  createCanvas(600, 400); 
  background(0); 
}

function draw() {
  background(0, 25); 

 
  if (particles.length < 50) {
    for (let i = 0; i < 2; i++) { 
      
      particles.push(new Particle(random(width), random(height))); 
    }
  }
  
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update(particles); 
    particles[i].show(); 
    if (particles[i].finished()) { 
      particles.splice(i, 1); 
    }
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);      
    this.vel = createVector(0, 0);       
    this.acc = createVector(0, 0);      
    
    this.alpha = 255;                   
    this.color = 255;                   
    this.r = 20;                        
  }

  finished() {
    return this.alpha < 0;              
  }

  update(particles) {
  
    let center = createVector(width / 2, height / 2); 
    if (gathering) {
     
      let dir = p5.Vector.sub(center, this.pos); 
      dir.setMag(2); 
      this.vel = dir; 
    } else {
     
      if (this.vel.mag() < 1) { 
        this.vel = p5.Vector.random2D(); 
        this.vel.mult(random(2, 5)); 
      }
    }

    this.pos.add(this.vel); 
    this.alpha -= 2; 
   
    if (frameCount > 200) { 
      gathering = false;
    }
  }

  show() {
    fill(this.color, this.alpha); 
    noStroke(); 
    
    
    push();
    translate(this.pos.x, this.pos.y);
    rotate(frameCount / 50.0); 
    ellipse(this.pos.x, this.pos.y, this.r, this.r); 
    pop(); 
  }



}
