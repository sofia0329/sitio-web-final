let circles = [];
let numCircles = 9; 
let speed = 2; 

function setup() {
  createCanvas(500, 500);
  noStroke();
  
  let spacing = width / (numCircles + 1); 
  
  // Crear múltiples círculos alineados horizontalmente
  for (let i = 0; i < numCircles; i++) {
    let xPosition = spacing * (i + 1); 
    let initialY = height / 2; 
    circles.push(new Circle(xPosition, initialY, i % 2 === 0)); 
  }
}

function draw() {
  background(0);
  
  // Mostrar y actualizar círculos
  for (let circle of circles) {
    circle.update();
    circle.display();
  }
}

// Clase para los círculos
class Circle {
  constructor(x, initialY, goingDown) {
    this.x = x;
    this.y = initialY; 
    this.size = 50;
    this.ySpeed = speed; 
    this.direction = goingDown ? 1 : -1; 
  }
  
  update() {
    // Mover el círculo en la dirección actual
    this.y += this.ySpeed * this.direction;

    // Rebotar en los bordes superior e inferior
    if (this.y <= this.size / 2) { 
      this.y = this.size / 2; 
      this.direction = 1; 
    } else if (this.y >= height - this.size / 2) { 
      this.y = height - this.size / 2; 
      this.direction = -1; 
    }
  }
  
  display() {
    fill(0, 223, 249 , 190);
    circle(this.x, this.y, this.size);
  }
}
