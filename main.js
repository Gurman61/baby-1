img = "";
img1= "";
img2= "";
img3= "";
img4="";
img5="";

function preload()
{
    img = loadImage("dog_cat.jpg");
    sound = loadSound("alert.wav");
}
function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modelLoaded()
{
    console.log("Model Loaded!")
    status + true;
    objectDetector.detect(video,gotResults);

}

function gotResults()
{
    if(error)
    {
        console.log(error);

    }
    console.log(results);
    objects = results;

}

function draw()
{
    image(video,0,0,380,380);

    if(status != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video,gotResults);
        for (i=0; i<objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Objects Detected";

            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    
    
    
}