function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video , modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded(){
    console.log('PoseNet Is Intialized');
}

function draw(){
    background('#969A97');
    fill('#F90093');
    textSize(difference);
    text('Aishwarya', 50, 400);

    document.getElementById("square_side").innerHTML = "Font Size of the Text will be = "+difference+"px";

}

noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+leftWristX+"rightWristX = "+rightWristX+"difference = "+difference);
    }
} 