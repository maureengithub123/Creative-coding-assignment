let colors = ['black', 'White', 'blue', '#pink', 'yellow', 'green', '#f477c3', '#70499c', '#006494', '#1b98e0'];
let dotSize = 4; // 控制点的大小，您可以自由调整这个值
let asset;


function preload(){
asset = loadSound();


}


function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);


  randomSeed(999); // 固定随机种子值

  translate(width / 2, height / 2);
  rotate(PI * random(10)); 
  translate(-width / 2, -height / 2);
  background('#014b70');


  // 手动定义的位置来填充画布
  let positions = [
    {x:  width / 2, y: height / 2, size: 20},
    {x: width / 2, y: height / 2, size: 20},
    {x: 3 * width / 4, y: 3 * height / 4, size: 20},
    {x: width / 4, y: 3 * height / 4, size: 20},
    {x: 3 * width / 4, y: height / 4, size: 20},
    {x: width / 4, y: height / 2, size: 20},
    {x: 3 * width / 4, y: height / 2, size: 20},
    {x: width / 2, y: height / 4, size: 20},
    {x: width / 2, y: 3 * height / 4, size: 20},
    {x: width / 6, y: height / 6, size: 20},
    {x: 5 * width / 6, y: 5 * height / 6, size: 20},
    {x: width / 6, y: 5 * height / 6, size: 20},
    {x: 5 * width / 6, y: height / 6, size: 20},
    {x: width / 6, y: height / 2, size: 20},
    {x: 5 * width / 6, y: height / 2, size: 20},
    {x: width / 2, y: height / 6, size: 20},
    {x: width / 2, y: 5 * height / 6, size: 20},
    {x: width / 3, y: height / 3, size: 20}

  ];

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
    drawDots(x, y, s + 0.1 + i * 1, random(colors));
  }
  drawConcentricCircles(x, y, 3, 20); 
}

function drawDots(x, y, diameter, color) {
  let numDots = 40; // 点的数量增加以使环更密集
  fill(color);
  noStroke();
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

