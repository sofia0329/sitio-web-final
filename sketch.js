let img;
let asciChar = "@%#*+=-:. "; // Definir los caracteres ASCII
let size;

function preload() {
  img = loadImage("PicsArt_08-26-08.09.50.jpg");
}

function setup() {
  createCanvas(800, 800);
  img.resize(100, 0);
  size = width / img.width;
}

function draw() {
  background(255);
  img.loadPixels();

  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      let pixelIndex = (i + j * img.width) * 4;
      let r = img.pixels[pixelIndex + 0];
      let g = img.pixels[pixelIndex + 1];
      let b = img.pixels[pixelIndex + 2];

      let brightness = (r + g + b) / 3;
      let tIndex = floor(map(brightness, 0, 255, 0, asciChar.length - 1)); // Restar 1 para índice válido

      let x = i * size + size / 2;
      let y = j * size + size / 2;
      let t = asciChar.charAt(tIndex);

      fill(0); // Relleno negro para que el texto sea visible
      textSize(size);
      textAlign(CENTER, CENTER);
      text(t, x, y);
    }
  }
}
