let selected_color;
let num_of_colors;
let num_of_brushes;
let colors;
let brushes_width;
let over_color_box;
let over_brush_box;
let over_reset_box;
let brush_width;  

function setup() {
  createCanvas(1000, 600);

  num_of_colors = 10;
  num_of_brushes = 3;

  fill(220);
  noStroke();
  rect(0, 0, 1000, 600);

  colors = [color('red'), color('orange'), color('yellow'), color('lawngreen'), color('deepskyblue'),
  color('blue'), color('violet'), color('saddlebrown'), color('white'), color('black')];
  
  brushes_width = [3, 5, 10];

  array_of_color_box = [];
  selected_color = color('black');

  setUpToolArea();

  brush_width = 5;
}

function setUpToolArea() {
  setColorBox();
  setBrushBox();
  setResetBox();
}

function setColorBox() {
  strokeWeight(1);
  stroke(0);
  fill(220);
  rect(0, 0, 35, (num_of_colors * 30) + 5);

  noStroke();
  for (var i = 0; i < num_of_colors; i++) {
    fill(colors[i]);
    rect(5, (i * 30) + 5, 25, 25);
  }
}

function colorBoxTest() {
  if ((mouseX > 0) && (mouseX < 35) && (mouseY > 0) && (mouseY < (num_of_colors * 30) + 5)) {
    over_color_box = true;
  }
  else {
    over_color_box = false;
  }
}

function inColorBox() {
  for(var i = 0; i < num_of_colors; i++) {
    if ((mouseX > 5) && (mouseX < 30) && (mouseY > (((i + 1) * 5) + (i * 25))) && (mouseY < (((i + 1) * 5) + ((i + 1) * 25)))) {
      selected_color = colors[i];
    }
  }
}

function setBrushBox() {
  strokeWeight(1);
  stroke(0);
  fill(220);
  num_of_colors = 10;
  for (var i = 0; i < num_of_brushes; i++) {
    rect(35, i * 30, 60, 30);
  }

  for (var i = 0; i < num_of_brushes; i++) {
    strokeWeight(brushes_width[i]);
    line(45, i * 30 + 15, 85, i * 30 + 15);
  }
}

function brushBoxTest() {
  if ((mouseX > 35) && (mouseX < 95) && (mouseY > 0) && (mouseY < num_of_brushes * 30)) {
    over_brush_box = true;
  }
  else {
    over_brush_box = false;
  }
}

function inBrushBox() {
  for (var i = 0; i < num_of_brushes; i++) {
    if ((mouseX > 35) && (mouseX < 95) && (mouseY > (i * 30)) && (mouseY < ((i + 1) * 30))) {
      brush_width = brushes_width[i];
    }
  }
}

function setResetBox() {
  strokeWeight(1);
  stroke(0);
  fill(220);
  rect(95, 0, 60, 30);

  textSize(18);
  fill(0);
  text('Reset', 100, 20);
}

function resetBoxTest() {
  if ((mouseX > 95) && (mouseX < 155) && (mouseY > 0) && (mouseY < 30)) {
    over_reset_box = true;
  }
  else {
    over_reset_box = false;
  }
}

function inResetBox() {
  fill(220);
  noStroke();
  rect(0, 0, 1000, 600);

  setUpToolArea();
}

function runAllTest() {
  colorBoxTest();
  brushBoxTest();
  resetBoxTest();
}

function mousePressed() {
  runAllTest();
  if (over_color_box) {
    inColorBox();
  }
  else if (over_brush_box) {
    inBrushBox();
  }
  else if (over_reset_box) {
    inResetBox();
  }
  else {
    strokeWeight(brush_width);
    stroke(selected_color);
    strokeJoin(ROUND);
    beginShape(LINES);
    vertex(mouseX, mouseY);
  }
}

function mouseDragged() {
  vertex(mouseX, mouseY);
  endShape();
  beginShape(LINES);
  vertex(mouseX, mouseY);
}

function mouseReleased() {
  endShape();
  setUpToolArea();
}
