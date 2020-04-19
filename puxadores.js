var x3;
var y3;

function calculaHandles(){  
    push();
    stroke(255);
    translate(centroX,centroY);
    line(x3 , y3 , x3 , 0);
    line(x3 , y3 , 0 ,y3);
  
    noFill();
    ellipse(0,0,x3,y3);
    pop();
}

function mouseMoved(){
    x3 = map(mouseX, centroX, centroX+100 , 0 , 100);
    y3 = map(mouseY, centroY , centroY+100 , 0 , 100);

    movendo = true;
}

function inputa(){
    if(mouseY > 200){
        if(comecou && mouseIsPressed){
            raioX = x3*30;
            raioY = y3*30;
        }
    }
}

function mouseReleased(){
    if(mouseY>200){
        if(!comecou){   
            song.play();
            comecou = true;
        }
        else if(comecou){
            primeiro = false;
        }
    }
}