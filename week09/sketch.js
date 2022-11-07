let number = 3;

let t = 0;
let ty = 0;
let mid = 0;

let transparent=0;
let s;
let noiseScale=0.02;
let direction = 1;

let spotlights = [];

function myFunction1() {
    number = 1;
  }
// function myFunction2() {
//     number = 2;
//   }
function myFunction3() {
    number = 3;
  }


function setup() {
 let canvas = createCanvas(500,500);
 canvas.parent("canvas");
 background(0);

  xSpeed1 = random(-5, 5);
  xSpeed2 = random(-5, 5);
  start1 = random(0, 450);
  spot1 = random(0, 500);
  light_width1 = random(50, 80);
  x1 = start1;
  start2 = random(0, 450);
  spot2 = random(0, 500);
  light_width2 = random(50, 80);
  x2 = start2;

  for (let i = 0; i < 4; i++) {
    spotlights.push(new spotlight(width, height / 2));
  }
}

function draw() {
  if(number == 1){
  background(0);
  translate(width / 4, height / 4);
  mid = mouseX + mouseY;
  stroke(
    map(mid, 0, 1280, 0, 255)*(sin(frameCount*0.1)+0.1),
    map(mid, 0, 1280, 255, 0)*(cos(frameCount*0.1)+0.3),
    map(mid, 0, 1280, 255, 0)*(sin(frameCount*0.1)+0.5)
  );
  strokeWeight(1.5);
  for (let i = 1; i < 100; i++) {
    line(
      sin(t + i / 10) * 125 + noise(i / 20) * 125 + sin(ty + i / 60) * 125,
      cos(t + i / 10) * 125 + noise(i / 20) * 125 + cos(ty + i / 60) * 125,
      sin(t + i / 15) * 125 +
        noise(i / 20) * 125 +
        sin(ty + i / mouseX / 50) * 125 +
        mouseY +
        100,
      cos(t + i / 15) * 125 +
        noise(i / 20) * 125 +
        cos(ty + i / mouseX / 50) * 125 +
        mouseY +
        100
    );
  }

  t += (0.15 * mouseX) / 3000;
  ty += (0.2 * mouseY) / 3000;
    }

    if(number == 2){
        let angle = radians(frameCount * 0.5);
        s = frameCount;

        push();
        translate(width / 2, height / 2);
        rotate(radians(frameCount));
        fill(0, 0, 0, 0);
        rectMode(CENTER);
        stroke(255, 0, 0);
        translate(30,30);
        rotate(radians(frameCount))
        rect(mouseX/10, mouseY/10, mouseX, mouseX);
        pop();

        if(s % 50 == 0){
        fill(0,0,0,125);
        rect(-50,-50,700,700);
        }
        
        push();
        translate(width / 2, height / 2)
        rotate(radians(frameCount* -2));
        fill(0, 0, 0,0);
        stroke(0,0,255);
        triangle(0,25*mouseX,-25*mouseX,-25*mouseY,25*mouseY,-25*mouseX);
        pop();
    }

    if (number == 3){
        background(0);
        for (let i = 0; i < spotlights.length; i++) {
            spotlights[i].update();
            spotlights[i].display();
          }
    }
}

class spotlight {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.speed = random(3, 7);
      this.start = random(0, 400);
      this.spot = random(0, 500);
      this.light_width = random(width / 5, width / 2);
  
      this.x = this.start;
      this.light = random(50, 150);
  
      this.change_speed = 0.6;
      this.change = random(0.005, 0.015);
  
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
    }
  
    update() {
      push();
      this.x = this.x + this.speed * this.change_speed;
  
      this.change_speed = this.change_speed + this.change;
  
      if (this.change_speed > 2 || this.change_speed < 0.4) {
        this.change = this.change * -1;
      }
  
      if (
        this.x < this.start - this.light_width ||
        this.x > this.start + this.light_width - 10
      ) {
        this.speed = this.speed * -1;
      }
      pop();
    }
  
    display() {
      push();
      fill(this.r, this.g, this.b, 45);
      strokeWeight(0);
      beginShape();
      vertex(this.spot, 0);
      vertex(this.x + this.light, height);
      vertex(this.x, height);
      endShape(CLOSE);
      pop();
    }
  }

  function myFunction1() {
    number = 1;
    canvas.style.boxShadow = "0px 0px 20px Magenta";
    canvas.style.borderColor = "Magenta";
  }

  function myFunction2() {
    number = 2;
    canvas.style.boxShadow = "0px 0px 20px blue";
    canvas.style.borderColor = "blue";
  }

  function myFunction3() {
    number = 3;
    canvas.style.boxShadow = "0px 0px 20px red";
    canvas.style.borderColor = "red";
  }

  
