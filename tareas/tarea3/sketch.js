function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0 );
  translate(width / 2, height / 2);
  
fill(110,44,0)  
ellipse(0 , 0, 5, 5)
  
  
 // rotación y escala del primer circulo   
  rotate(frameCount * 0.01);
  scale(1 + sin(frameCount * 0.01) * 0.5);
  //primer circulo
  let  r1 = 90;
  let points1 = 30;
  
     for (let i = 0; i < points1; i++) {
    let angle = TWO_PI / points1 * i; // Ángulo para cada punto
  
    let x = r1 * cos(angle);
    let y = r1 * sin(angle);
    
    fill(243, 156, 18 );
    noStroke();
    ellipse(x, y, 15, 15); // Dibuja un punto en la posición calculada
    
     }
   //Segundo circulo
  rotate(frameCount * -0.02); //misma rotacion y escala del primer circulo
  
  let r2 = 70;
  let points2 = 25;
  
  for (let i = 0; i < points2; i++)
    {
      let angle = TWO_PI / points2 * i;
      let x = r2 * cos(angle);
      let y = r2 * sin(angle);
      
      fill(214, 137, 16);
      noStroke();
     ellipse(x, y, 10, 10);
    }
  
  //Tercer circulo
   rotate(frameCount * -0.01); //misma rotacion y escala del primer circulo
  
  let r3 = 50;
  let points3 = 20;
  
  for (let i = 0; i < points3; i++)
    {
      let angle = TWO_PI / points3 * i;
      let x = r3 * cos(angle);
      let y = r3 * sin(angle);
      
      fill(185, 119, 14  );
      noStroke();
     ellipse(x, y, 7, 7);
      
      //Cuarto circulo
      rotate(frameCount * 0.00); //misma rotacion y escala del primer 
  
  let r4 = 30;
  let points4 = 15;
  
  for (let i = 0; i < points4; i++)
    {
      let angle = TWO_PI / points4 * i;
      let x = r4 * cos(angle);
      let y = r4 * sin(angle);
      
      fill( 156, 100, 12 );
      noStroke();
     ellipse(x, y, 5, 5);
    }
  
      //Quinto circulo (el mas grande)
      
      rotate(frameCount * 0.00); //misma rotacion y escala del primer 
  
  let r5 = 110;
  let points5 = 35;
  
  for (let i = 0; i < points5; i++)
    {
      let angle = TWO_PI / points5 * i;
      let x = r5 * cos(angle);
      let y = r5 * sin(angle);
      
      fill(245, 176, 65 );
      noStroke();
     ellipse(x, y,15, 15);
    }
       //Sexto circulo
      rotate(frameCount * 0.00); //misma rotacion y escala del primer 
  
  let r6 = 10;
  let points6 = 7;
  
  for (let i = 0; i < points6; i++)
    {
      let angle = TWO_PI / points6 * i;
      let x = r6 * cos(angle);
      let y = r6 * sin(angle);
      
      fill( 126, 81, 9);
      noStroke();
     ellipse(x, y, 4, 4);
      
    
}
    }
}