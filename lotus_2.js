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



var inicio, fim, entremeio;

function drawParticle(x,y,w,h,hue,sat,bri){
    stroke(0);
    fill(hue,sat,bri);
    rect(x,y,w,h);
}

window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});

function predefinicoesDoObjeto(){
    vetores = 50;
    afastamento = 500;
    deslocamento = 50;
    reparticao = 20;
    raioX = -42;
    raioY = -12; 
    deformaX = 126.85337;
    deformaY = 319.79946;

    x2 = function(t) {
        return raioX * sin(t / deformaX);};
    y2 = function(t) {
        return raioY * sin(t / deformaY);};
        
    inicio = 0.05;
    fim = 0.9;
    entremeio = 2;

    centroX = windowWidth/2;
    if(windowWidth/windowHeight < 0.6){
        centroY = windowHeight/2.5;
    }
    else{
        centroY = windowHeight/2.25;
    }
    
  }

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(200,200,255);
    frameRate(25);
    colorMode(HSB,360,100,100,1)
    song.setVolume(1);

    t = 0;

    velocidadeParticulas= 2; 

    comecou = false;
    primeiro = true;

    predefinicoesDoObjeto();
    predefinicoesDoSom();
    criaSliders();

    /*console.log("afastamento " + afastamento)
    console.log("deslocamento " + deslocamento)
    console.log("reparticao " + reparticao)

    console.log("deformaX " + deformaX)
    console.log("deformaY " + deformaY)

    console.log("raioX " + raioX)
    console.log("raioY " + raioY)*/
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    centroX = windowWidth/2;
    if(windowWidth/windowHeight < 0.6){
        centroY = windowHeight/2.5;
    }
    else{
        centroY = windowHeight/2.25;
    }
  }

function draw(){
 
    background(0);

    assignSliders();
    comecaCalcularMedia();
    inputa();
    gravidade();

    push();
    translate(centroX,centroY);
    objeto();
    pop();
}

function gravidade(){
    var easing = 0.001;
    var target = 9000;

    if (comecou && primeiro){
        var dx = target - raioX;
        var dy = target - raioY;

        raioX += dx * easing;
        raioY += dy * easing;
        //console.log(raioX)
    }
    else if(comecou && !primeiro){
        raioX+=1;
        raioY+=1;
    }
}

function objeto(){
    
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
                                    drawParticle(-posiX*(a/20) , -posiY*(a/20) , -posiY*(a/8), -posiX*(a/8) , 0 , 100 , 100);
                                    drawParticle(-posiX*(a/2) , -posiY*(a/2) , -posiY*(a/3) , -posiX*(a/3) , 200 , 100 , 100);
                
                                    drawParticle((posiX*a)+deslocamento , (posiY*a)+deslocamento , 3+(a/4)*(posiX) , 6+(a/4)*posiY , hueA , 100 , 100);
            }
      
            else if(contador == 1)  drawParticle((posiX*a)+deslocamento , (posiY*a)+deslocamento , 3+(a/4)*(posiX) , 6+(a/4)*posiY , hueB , 100 , 100);
              
            else if(contador == 2)  drawParticle((posiX*a)+deslocamento , (posiY*a)+deslocamento , 3+(a/4)*(posiX) , 6+(a/4)*posiY , hueC , 100 , 100);
                
            else if(contador == 3)  drawParticle((posiX*a)+deslocamento , (posiY*a)+deslocamento , 3+(a/4)*(posiX) , 6+(a/4)*posiY , hueD , 100 , 100);
        
            else if(contador == 4)  drawParticle((posiX*a)+deslocamento , (posiY*a)+deslocamento , 6+(a/4)*(posiX) , 3+(a/4)*posiY , hueE , 100 , 100);
            
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
    drawParticle(-posiX*(a), -posiY*(a),  2*(amplificador*(amplificador/40))*(posiX/2000), (amplificador/30) ,0,100,100);
}
