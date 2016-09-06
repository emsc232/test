//Introduction more "atomic" programming with functions
//We will use a function or collection of reusable commands to
//draw a geometric pattern resembling a face


function Shape(x,y){
  stroke(0,255,0,255);
  fill(0,100,160,255);
  rect(x+50,y, 50, 50);
  rect(x,y+50, 50, 50);
  rect(x+35,y+35, 20, 20);

  rect(x+55,y+5, 10, 10);
  rect(x+5,y+55, 10, 10);
  rect(x+5,y+85, 10, 10);
  rect(x+85,y+5, 10, 10);
  rect(x+85,y+35, 10, 10);
  rect(x+35,y+85, 10, 10);
  rect(x+5,y+70, 10, 10);
  rect(x+70,y+5, 10, 10);
  rect(x+85,y+20, 10, 10);
  rect(x+20,y+85, 10, 10);

  ellipse(x+25,y+50, 5, 50);
  ellipse(x+60,y+60, 40, 40);
  ellipse(x+50,y+25, 50, 5);

  triangle(x+50, y+50, x+50, y+85, x+85, y+50);
}

function setup() {
  createCanvas(1400,1000);
  background(0,0,0,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var x=0;x<14;x++){
    for(var y=0;y<10;y++){
      Shape(x*100,y*100);
      console.log("x:"+x+" y:"+y);
    }
  }
}
