var canvas;
var music;
var rec1, rec2, rec3, rec4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    rec1 = createSprite(700, 590, 160, 25)
    rec1.shapeColor = "orange"
    rec2 = createSprite(500, 590, 160, 25)
    rec2.shapeColor = "purple"
    rec3 = createSprite(300, 590, 160, 25)
    rec3.shapeColor = "red"
    rec4 = createSprite(100, 590, 160, 25)
    rec4.shapeColor = "pink"
   
    //create 4 different surfaces
    surf1 = createSprite(795, 300, 10, 800)
    surf1.visible = false
    surf2 = createSprite(5, 300, 10, 800)
    surf2.visible = false
    surf3 = createSprite(400, 590, 800, 10 )
    surf3.visible = false
    surf4 = createSprite(400, 5, 800, 10)
    surf4.visible = false

    //create box sprite and give velocity
    box = createSprite(450, 200, 30, 30)
    box.shapeColor = "black"
    box.velocityX = 3
    box.velocityY = 3
}

function draw() {
    background("green");
   
    //create edgeSprite
    edges = createEdgeSprites()
    box.collide(edges)

    if(surf1.isTouching(box) && box.bounceOff(surf1)) {
    music.play()
    }

    
    if(surf2.isTouching(box) && box.bounceOff(surf2)) {

    }

    
    if(surf3.isTouching(box) && box.bounceOff(surf3)) {

    }

    
    if(surf4.isTouching(box) && box.bounceOff(surf4)) {

    }

    if(rec1.x-box.x < rec1.width/2+box.width/2 && 
        box.x-rec1.x < rec1.width/2+box.width/2
        && rec1.y-box.y < rec1.height/2+box.height/2 && 
        box.y-rec1.y < rec1.height/2+box.height/2){

            box.shapeColor = "orange"
            box.shapeColor = "orange"
        }

        if(isTouching(rec2, box)) {
            rec2.shapeColor = "purple"
            box.shapeColor = "purple"
            
        }

        if(isTouching(rec3, box)) {
            rec3.shapeColor = "red"
            box.shapeColor = "red"
        }
        if(rec4.isTouching(box)) {
            box.shapeColor = "pink"
            box.velocityX = 0
            box.velocityY = 0
            music.stop()
        }

drawSprites()
    }

    //add condition to check if box touching surface and make it box
    
            
        

        function isTouching(rec1, box) {
            if(rec1.x-box.x < rec1.width/2+box.width/2 && 
                box.x-rec1.x < rec1.width/2+box.width/2
                && rec1.y-box.y < rec1.height/2+box.height/2 && 
                box.y-rec1.y < rec1.height/2+box.height/2){
                    return true
        
                   
                }
        }
