img=""
Status=""
objects=[]
function preload(){
    img=loadImage("dog_cat.jpg")
}

function setup(){
    canvas=createCanvas(640,420)
    canvas.center() 
    objectDetected=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="Status:Detectng objects"
}

function modelLoaded(){
    console.log("Model is Loaded")
    Status=true
    objectDetected.detect(img,gotResult)
}

function gotResult(error,results){
    if(error){
        console.log(error)
    }
    console.log(results)
    objects=results
}

function draw(){
    image (img,0,0,640,420)

    if(Status !="" ){
        for (let i = 0; i< objects.length; i++) {
        document.getElementById("status").innerHTML="status: objects detected"
        fill("#FF0000")
        percent=floor( objects[i].confidence * 100 )
        text( objects[i].label + " " + percent + "%", objects[i].x + 15 , objects[i].y + 15 )
        noFill()
        stroke("#FF0000")
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
            
        }
    }
}
