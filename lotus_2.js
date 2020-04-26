var x2;
var y2;

var t;

var vetores;
var afastamento;
var reparticao;
var raioX;
var raioY;
var deformaX;
var deformaY;

var centroX;
var centroY;

var velocidadeParticulas;
var deslocamento;

var comecou, movendo, primeiro;

var amplificador;

var hueA,hueB,hueC,hueD,hueE;

var inicio, fim, entremeio;

function drawParticle(x,y,w,h,hue,sat,bri){
    fill(hue,sat,bri);
    rect(x,y,w,h);
}

window.addEventListener("load",function() {
    setTimeout(function(){
        window.scrollTo(0, 1); // This hides the address bar:
    }, 0);
});

function predefinicoesDoObjeto(){
    vetores = 80;
    afastamento = 500;
    deslocamento = random(40,60);
    reparticao = 20;
    raioX = -42;
    raioY = -12; 
    deformaX = 126.85337;
    deformaY = 319.79946;

    x2 = function(t) {
        return raioX * sin(t / deformaX);};
    y2 = function(t) {
        return raioY * sin(t / deformaY);};

    centroX = windowWidth/2;
    if(windowWidth/windowHeight < 0.6){
        centroY = windowHeight/2.3;
    }
    else{
        centroY = windowHeight/2.2;
    }
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200,200,255);
    frameRate(25);
    colorMode(HSB,360,100,100,1);
    song.stop();
    song.setVolume(1);

    t = 0;

    velocidadeParticulas= 3; 
    maxVelocity = 20;

    comecou = false;
    primeiro = true;
    aboutOnScreen = false;
    contactOnScreen = false;

    predefinicoesDoObjeto();
    predefinicoesDoSom();
    //criaSliders();

    tela = document.getElementById("defaultCanvas0");
    tela.addEventListener('mouseup', touchScreen, false);

    gameBack();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    realignCenter();
    if(!comecou){
        realignBegining();
    }
}
window.addEventListener("resize", function(){
    console.log()
        resizeCanvas(windowWidth, windowHeight);
    realignCenter();
    if(!comecou){
        realignBegining();
    }
});
function draw(){
    background(0);
    //assignSliders();
    comecaCalcularMedia();
    inputa();
    gravidade();

    push();
    translate(centroX,centroY);
    objeto();
    pop();
}
function gravidade(){
    var easing = 0.0009;
    var target = 9000;

    if (comecou && primeiro){
        var dx = target - raioX;
        var dy = target - raioY;

        raioX += dx * easing;
        raioY += dy * easing;
        console.log("merda_primeiro")
        //console.log(raioX)
    }
    else if(comecou && !primeiro){
        raioX+=1;
        raioY+=1;
    }
}
function objeto(){
    inicio = 0.05;
    fim = 0.9;
    entremeio = 1.8;
    
    t+=velocidadeParticulas;
    
    for(var vao = 0, createdVectors = 0, spectrumPosition = 0; createdVectors <= vetores;  createdVectors++){
        var contador = 0;
        
        if( spectrumPosition == 25){
            spectrumPosition = 0;
        }
        
        rotate(PI/reparticao);
        for(var a = inicio; a <= fim; a *= entremeio){

            var posiX = x2(t+vao);
            var posiY = y2(t+vao);    
            
            if(contador == 0){
                stroke(0,100,100);
                drawParticle(-posiX*(a/20) , -posiY*(a/20) , -posiY*(a/8), -posiX*(a/8) ,0,100,80);
                stroke(30 , 100, 100);
                drawParticle(-posiX*(a/2) , -posiY*(a/2) , -posiY*(a/3) , -posiX*(a/3) , 30 , 85, 100);
               
                stroke(300 , 50 , 100);
                drawParticle((posiX*a)+deslocamento , (posiY*a)+deslocamento , 3+(a/4)*(posiX) , 6+(a/4)*posiY , 300 , 30 , 100);
            }
      
            else if(contador == 1) {
                stroke(200 , 50 , 100);
                drawParticle((posiX*a)+deslocamento , (posiY*a)+deslocamento , 3+(a/4)*(posiX) , 6+(a/4)*posiY ,200 , 100 , 100);
            }           
            else if(contador == 2){  
                stroke(150 , 80 , 100);
                drawParticle((posiX*a)+deslocamento , 1+(posiY*a)+deslocamento , 3+(a/16)*(posiX/5) , 3+(a/16)*posiY/5 ,150 , 100 , 100);
            }
                
            else if(contador == 3){
                stroke(300 , 80 , 100);
                drawParticle((posiX*a)+deslocamento , (posiY*a)+deslocamento , 3+(a/4)*(posiX) , 6+(a/4)*posiY ,   300 , 55 , 100);
            }   
            else if(contador == 4){
                stroke(270 , 80 , 100);
                drawParticle((posiX*a)+deslocamento , (posiY*a)+deslocamento , 6+(a/4)*(posiX) , 3+(a/4)*posiY , 270 , 70 , 100);
            }         
            desenharAgulhas(posiX,posiY,spectrumPosition,a);
            contador++;
            vao += afastamento;
            spectrumPosition++;
        }
    }    
}
function desenharAgulhas(posiX,posiY,spectrumPosition,a){
    if(spectrumPosition <= 5){
        amplificador = map(spectrum[spectrumPosition],0,256,1,75); 
    }
    else if(spectrumPosition <= 10){
        amplificador = map(spectrum[spectrumPosition],0,256,0,200);
    }
    else if(spectrumPosition <= 20){
        amplificador = map(spectrum[spectrumPosition],0,256,0,300);
    }
    else{
        amplificador = map(spectrum[spectrumPosition],0,256,0,400);
    }
    strokeWeight(0.5);
    stroke(0,0,0);
    drawParticle(-posiX*(a), -posiY*(a), 1.5 , 1.5*(amplificador) ,0,100,100);
}
