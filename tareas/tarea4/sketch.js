let d;
let div = 25
let sym =450 / div


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  pixelDensity(5);
}

function draw() {
  background(0, 10);
  noStroke();
  d = map(mouseX, 0, width, 0, 50);

for(i = 0; i < 360; i += sym){
    push();
    translate(width/2, height/2);
    rotate(i);
    branch(70);
    pop();
    
    
    
  }
}

function branch(br) {
  let radius = map(br, 70, 30, 15, 5); // Cambia el tamaño basado en 'br'

   let blueValue = map(radius, 5, 15, 255, 100); // Cambia el valor azul
  
  fill(0, 0, blueValue);
  noStroke();
  


  circle(40, 40, 20, -br);
  translate(8, -br);
  
  if(br > 30){
    push();
    rotate(-d);
    branch(br*0.8);
    pop();

     push();
    rotate(d);
    branch(br*0.3);
    pop();
  }
} 
