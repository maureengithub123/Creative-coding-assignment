// goal, simple color dreamtime feeling, pop and rotate

let colors = ['#6e85e0', 'White', '#7b6ee0', '#35b84d', '#8dd1e0','#dee08d','#eaccf0', '#9839a8'];
let dotSize = 6.5; // 控制点的大小，您可以自由调整这个值
let asset;


function preload(){
asset = loadSound("assets/digeridoo1.mp3");


}


function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);



  randomSeed(999); // 固定随机种子值

  translate(width / 2, height / 2);
  rotate(PI * random(10)); 
  translate(-width / 2, -height / 2);
  background('black');
  

  switch (width) {
    case "pop":
       break;
    case "rotate":
       break;
  }


 

  // 手动定义的位置来填充画布
  let positions = [
    {x:20, y: 200, size: 15},
    {x:160, y: 180, size: 15},
    {x:320, y: 190, size: 15},
    {x:460, y: 190, size: 15},
    {x:380, y: 50, size: 15},
    {x:450, y: 350, size: 15},
    {x:590, y: 270, size: 15},
    {x:50, y: 30, size: 15},
    {x:220, y: 40, size: 15},
    {x:-130, y: 280, size: 15},
    {x:20, y: 300, size: 15},
    {x:200, y: 590, size: 15},


    // Turtle
 
    {x:220, y: 400, size: 5},
    {x:150, y: 390, size: 5},




  ];

  stroke('#9aecfc')
  strokeWeight(3)
  fill('#182557')
  ellipse(330,400,90,80), // head
  ellipse(290,330,90,40), // arm 1
  ellipse(100,480,90,40), // foot 2
  ellipse(290,480,90,40), // arm 2
  ellipse(120,300,90,40), // foot 1
  fill('black')
ellipse(190,400,250,190), // body
{x:20, y: 300, size: 15},


  positions.forEach(pos => {
    drawPattern(pos.x, pos.y, pos.size);
   });
}

function form(x, y, d, num, mn) {
  push();
  translate(x, y);
  beginShape();
  for (let i = 0; i < num; i++) {
    let a = map(i, 0, num - 1, 0, TAU);
    let r = d * 3.5;
    if (i % 2 == 0) r *= mn;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    
  }
  endShape(CLOSE);
  pop();
 
}

function drawPattern(x, y, s) {
  let tt = int(random(10, 30));
  let rgn = 67;
  for (let j = 0; j < tt; j++) {
    let mn = map(j, 0, tt, 1, 0.5);
    let dd = map(j, 0, tt, s, s * 0);
    fill(random(colors));
    form(x, y, dd, rgn, mn);
  }
  for (let i = 0; i < 5; i++) {
    drawDots(x, y, s + 0.1 + i * 35, random(colors));
  }
  drawConcentricCircles(x, y, 3, 20); 
}

function drawDots(x, y, diameter, color) {
  let numDots = 40; // 点的数量增加以使环更密集
  fill(color);
  stroke('black');
  strokeWeight(3);
  for (let i = 0; i < numDots; i++) {
    let angle = TWO_PI / numDots * i;
    let dotX = x + cos(angle) * diameter / 2;
    let dotY = y + sin(angle) * diameter / 2;
    ellipse(dotX, dotY, dotSize, dotSize); // 使用全局变量 dotSize 控制点的大小
 
  
}
}

function drawConcentricCircles(x, y, numCircles, initialDiameter) {
  for (let i = 0; i < numCircles; i++) {
    let diameter = initialDiameter - i * 5; // 每个圆的直径减少10像素
    if (diameter > 0) { // 仅绘制直径大于0的圆
      fill(random(colors));
      noStroke();
      circle(x, y, diameter);

    }
  }
}

//
