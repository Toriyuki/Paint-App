let selected_color;
let num_of_colors;
let color_box;
let colors;
let over_color;


function setup() {
  createCanvas(1000, 600);

  rect(0, 0, 1000, 600);

  num_of_colors = 10;
  color_box = rect(0, 0, 35, (num_of_colors * 30) + 5);

  colors = [color('red'), color('orange'), color('yellow'), color('lawngreen'), color('deepskyblue'),
  color('blue'), color('violet'), color('brown'), color('white'), color('black')];
  
  array_of_color_box = [];
  setColorPalette();
  selected_color = color('black');
}

function draw() {
  over_color = false;
  if(mouseIsPressed) {
    colorBoxTest();
    if(over_color) {
      inColorBox();
    }
    else {
      fill(selected_color);
      ellipse(mouseX, mouseY, 10, 10);
    }
  }
}

function setColorPalette() {
  noStroke();
  for (var i = 0; i < num_of_colors; i++) {
    fill(colors[i]);
    rect(5, (i * 30) + 5, 25, 25);
  }
}

function colorBoxTest() {
  if((mouseX > 0) && (mouseX < 35) && (mouseY > 0) && (mouseY < 305)) {
    over_color = true;
  }
}

function inColorBox() {
  for(var i = 0; i < num_of_colors; i++) {
    if((mouseX > 5) && (mouseX < 30) && (mouseY > (((i + 1) * 5) + (i * 25))) && (mouseY < (((i + 1) * 5) + ((i + 1) * 25)))) {
      selected_color = colors[i];
    }
  }
}
