canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
roverWidth = 100
roverHeight = 90
roverX = 10
roverY = 10
nasaMarsImages=["mars.jpg", "mars1.jpg",  "mars2.jpg", "mars3.jpg", "mars4.jpg"]
randomNum=Math.floor(Math.random()*5)
console.log(randomNum)
backgroundImage = nasaMarsImages[randomNum]
roverImage = "rover.png"


function add() {
    backgroundImageTag = new Image()
    backgroundImageTag.onload = uploadBackground
    backgroundImageTag.src = backgroundImage

    roverImageTag = new Image()
    roverImageTag.onload = uploadRover
    roverImageTag.src = roverImage
}

function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height)
}

function uploadRover() {
    ctx.drawImage(roverImageTag, roverX, roverY, roverWidth, roverHeight)
}

window.addEventListener("keyDown", myKeyDown)

function myKeyDown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed)
    if (keyPressed == "37") {
        left()
        console.log("left key")
    }
    if (keyPressed == "38") {
       up()
        console.log("up key")
    }

    if (keyPressed == "39") {
        right()
        console.log("right key")
    }

    if (keyPressed == "40") {
        down()
        console.log("down key")
    }
}

function up() {
    if (roverY>=0){
        roverY=roverY-10
        console.log("roverX="+roverX+", roverY="+roverY)
        uploadBackground()
        uploadRover()
    }

}

function down() {
    if (roverY<=500){
        roverY=roverY+10
        console.log("roverX="+roverX+ ", roverY="+roverY)
        uploadBackground()
        uploadRover()
    }
}

function left(){
    if (roverX>=0){
        roverX=roverX-10
        console.log("roverX="+roverX+ ", roverY="+roverY)
        uploadBackground()
        uploadRover()
    }
}

function right(){
    if (roverX<=700){
        roverX=roverX+10
        console.log("roverX="+roverX+ ", roverY="+roverY)
        uploadBackground()
        uploadRover()
    }
}