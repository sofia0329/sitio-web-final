let circles = [];
let numCircles = 6; // Número inicial de círculos

function setup() {
  createCanvas(600, 400);
  // Inicializa algunos círculos al principio
  for (let i = 0; i < numCircles; i++) {
    circles.push(createCircle(random(width), random(height), random(2, 5)));
  }
}

function draw() {
  background(209, 244, 231);
  
  // Actualiza y dibuja cada círculo
  for (let i = circles.length - 1; i >= 0; i--) {
    circles[i].update();
    circles[i].display();
    
    // Si el círculo se ha salido del lienzo, eliminarlo
    if (circles[i].offScreen()) {
      circles.splice(i, 1);
    }
  }
}

// Crea un círculo con posiciones y velocidades aleatorios
function createCircle(x, y, r) {
  return {
    x: x,
    y: y,
    r: r,
    xSpeed: random(-2, 2),
    ySpeed: random(2, 5),

    update: function() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
      
      // Rebotar en los márgenes
      if (this.x < 0 || this.x > width) {
        this.xSpeed *= -1;
      }
      if (this.y < 0 || this.y > height) {
        this.ySpeed *= -1;
      }
    },

    display: function() {
      noStroke();
      fill(62, 207, 181 ); 
      ellipse(this.x, this.y, this.r * 9, this.r * 10);
    },

    offScreen: function() {
      return this.y > height + this.r || this.y < -this.r || this.x > width + this.r || this.x < -this.r;
    }
  };
}

// Detecta el clic derecho del mouse
function mousePressed() {
  if (mouseButton ===   LEFT) {
    // Añade un nuevo círculo en la posición del clic derecho
    circles.push(createCircle(mouseX, mouseY, random(2, 5)));
  }
}

// Previene el menú contextual del clic derecho
function contextMenu() {
  return false;
}