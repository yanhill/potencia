var x3;
var y3;
var containerInicio, btnUpdate, btnRestart;

var about;

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

function mouseDragged(){
    if(comecou && !aboutOnScreen){
        x3 = map(mouseX, centroX, centroX+100 , 0 , 100);
        y3 = map(mouseY, centroY , centroY+100 , 0 , 100);
    
        movendo = true;

        console.log("ain")
        raioX = x3*30;
        raioY = y3*30;
    }
}

function touchScreen(){
    console.log("tela");
    if(!aboutOnScreen){
    if(!comecou){

        console.log("TOUCH") 
        song.play();
        
        containerInicio.style.display ="none";      
        btnRestart.style.display ="block";        
        btnUpdate.style.borderBottom ="none";
        comecou = true;
        
    }
    else{
        console.log("oxenti")
        raioX = x3*30;
        raioY = y3*30;
        primeiro = false;
    }
}

}
function inputa(){
}

function touchStarted(){
   /*  if(!comecou){
    console.log("TOUCH") 
    song.play();
    comecou = true;
    
    containerInicio.style.display ="none";      
    btnRestart.style.display ="block";        
    btnUpdate.style.borderBottom ="none";
    }
           
  if(mouseY < windowHeight/1.1 && !aboutOnScreen){
       

    if(comecou){
        console.log("hm");
    }
       else{   
            song.play();
            comecou = true;
            
            
            containerInicio.style.display ="none";      
            btnRestart.style.display ="block";        
            btnUpdate.style.borderBottom ="none";

            console.log(comecou);
            
        }

 
  //      else if(comecou && mouseY <  windowHeight/1.1 && !aboutOnScreen){
   //         raioX = x3*30;
  //          raioY = y3*30;
  //  }
}*/
}
