function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    tint_color="";
    video.hide();
}

function draw(){
    image(video,230,150,220,200);
    fill("red");
    circle(50,50,80);
    
    circle(550,50,80);
    
    circle(550,430,80);
 
    circle(50,430,80);
    fill("blue");
    rect(540,90,20,300);
    rect(90,430,420,20);
    rect(40,90,20,300);
    rect(90,40,420,20);
}

function take_snapshot(){
      save("captured_image.png");
}