function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    tint_color="";
    video.hide();
}

function draw(){
    image(video,230,150,220,200);
    circle(50,50,80);
    fill("red");
    circle(550,50,80);
    fill("red");
    circle(550,430,80);
    fill("red");
    circle(50,430,80)
    
}

function take_snapshot(){
      save("captured_image.png");
}