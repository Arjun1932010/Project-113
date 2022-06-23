function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    tint_color="";
    video.hide();
}

function draw(){
    image(video,0,0,640,480);
    circle(650,-10,50)
}

function take_snapshot(){
      save("captured_image.png");
}