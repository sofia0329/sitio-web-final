let numShapes = 20;
let maxRadius = 400;
let angleOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(3);
  noStroke();  // Deshabilitar contorno para el fondo
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
  
}

function draw() {
  background(0, 30);  // Fondo oscuro con transparencia para crear un rastro
  translate(width / 2, height / 2);
  let step = maxRadius / numShapes;

  for (let i = 0; i < numShapes; i++) {
    let radius = step * (i + 1);
    let waveRadius = radius + sin(angleOffset + i * 2) * 30;  // Ondulación dinámica
    let rotationSpeed = angleOffset * (i * 0.02);  // Rotación lenta

    push();
    rotate(rotationSpeed);  // Rotamos las formas lentamente

    // Generar colores rosados y morados basados en el tiempo y el índice
    let r = map(sin(angleOffset + i * 0.5), -1, 1, 180, 255);  // Más altos en rojo
    let g = map(cos(angleOffset + i * 0.3), -1, 1, 50, 120);   // Valores bajos para verde
    let b = map(sin(angleOffset + i * 0.7), -1, 1, 180, 255);  // Altos en azul para tonos morados

    // Dibuja las líneas de fondo
    stroke(r, g, b, 150);  // Colores con transparencia para las líneas
    noFill();  // Sin relleno para las líneas
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.05) {
      let x = waveRadius * cos(a) * (i % 2 == 0 ? 1 : 0.6);
      let y = waveRadius * sin(a) * (i % 2 == 0 ? 1 : 0.8);

      if (i % 3 == 0) {
        fill(r, g, b, 15);  // Colores de relleno solo para círculos
        ellipse(x, y, 15, 15);  // Pequeños círculos
      } else {
        vertex(x, y);  // Dibuja líneas suaves
      }
    }
    endShape(CLOSE);
    
    pop();
  }

  angleOffset += 0.04;  // Suavidad en la animación
}


