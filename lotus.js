var ori = [];

var raioX;
var raioY;

var deformaX;
var deformaY;

var x2;
var y2;

var x3;
var y3;

var t;

var vetores;
var afastamento;
var reparticao

var centroX;
var centroY;

var song;
var fft;

var spectrum;

var amp;

var volhistory = [];

var vol ;
var volsTodos = [];

var velocidade;
var deslocamento;

var vols = [];

function preload(){
    song = loadSound('metamorphosis.mp3');
    //song = loadSound('LINN/bixaTravesty.mp3');
    //song = loadSound('TOE/EyeOfNight.mp3');
    //song = loadSound('TOE/thePassage.mp3');
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200,200,255);
    frameRate(25);
    colorMode(HSB,360,100,100,1)
    song.setVolume(1);
    song.play();

    t = 0;

    centroX = windowWidth/2;
    centroY = windowHeight/2;

    vetores = 100;
    afastamento = 200;
    deslocamento = -50;

    reparticao = random(10,100);

    raioX = random(-30,30);
    raioY = random(-30,30); 

    deformaX = random(100,2005);
    deformaY = random(100,2005);

    console.log("afastamento " + afastamento)
    console.log("deslocamento " + deslocamento)
    console.log("reparticao " + reparticao)

    x2 = function(t) {
        return raioX * sin(t / deformaX);};
    y2 = function(t) {
        return raioY * sin(t / deformaY);};

    fft = new p5.FFT(0.5,64);
    amp = new p5.Amplitude;

    velocidade = 2;
    
}

function draw(){
    background(0);
    
    calculaHandles();
    vol = amp.getLevel();
    spectrum = fft.analyze();

    vols.push(vol);
    volsTodos.push(vol);
   
    if(vols.length == 1){
        calcularMediaAmplitude();
    }

    push();

    translate(windowWidth/2,windowHeight/2)
    rotate(PI/2);
    objeto();

    pop();

    inputa();
}

function calcularMediaAmplitude(){
    var total = 0;
    
    if(volsTodos.length <= 300){       
        for(var i = 0; i < vols.length ; i++){
            total += vols[i];
        }
        var media = total / vols.length;
   
    } else {
        for(var i = 0; i < 300 ; i++){
            total += volsTodos[volsTodos.length-1 - i];
        }
        var media = total / 300;
    }
    
    velocidade = map(media, 0, 0.5, 0.1, 19);
    vols = [];
}

function objeto(){
    t+=(velocidade*(velocidade*velocidade*velocidade));
    var amplificador= map(spectrum[50],0,256,-10,50);
      //  rotate(PI/2);
var tentandone = 0;
        for(var i = 1, q = 0, sorteado = 0; q <= vetores; i+=afastamento, q++){
            rotate(PI/reparticao);
            var contador = 0;



       // for(var a = 0.02; a <= 3 ; a *= 3){

        sorteado++;
        if( sorteado == 30 ){
            sorteado = 0;
        }
      //  console.log(sorteado)
            for(var a = 0.02 ; a <= 1.05 ; a *= 2.5){
            var posiX = x2(t+i);
            var posiY = y2(t+i);

            if(contador == 0){
                fill(0,0,100);
                stroke(335,100,100);
                rect(-posiX*(a*2), -posiY*(a*2), -posiY*(a*2), -posiX*(a*2));
            }

            determinarCores(contador);
            //rotate(PI/a);
             push();
             rotate(PI/a);
            rect((posiX*a) + deslocamento, (posiY*a) + deslocamento,5 + (a / 6) * (posiY) , 10 + (a / 6) * posiX );
            pop();


      
            fill(0,100,100);
            stroke(0,100,0);
            rectMode(CENTER);

      
          //  se o x chegar a 50, volta ao zero

        
          if(sorteado <= 30){
            fill(0,100,100);
            amplificador = map(spectrum[sorteado],0,256,20,100);       
            rect(-posiX*(a), -posiY*(a),  0.2+(amplificador*2), 0.5+amplificador/25);
          }
          else if(sorteado <= 45){
            fill(60,100,100);
            amplificador = map(spectrum[sorteado],0,256,0,700);
            rect(-posiX*(a), -posiY*(a), 0.2+(amplificador*2), amplificador/25);
          }
          else if(sorteado <= 60){
            fill(90,100,100);
           amplificador = map(spectrum[sorteado],0,256,0,800);
            rect(-posiX*(a), -posiY*(a), 0.2+(amplificador*2), amplificador/25);
          }
          else{
        //    fill(120,100,100);
        //    amplificador = map(spectrum[sorteado],50,256,0,100);
        //    rect(-posiX*(a), -posiY*(a), 0.2+(amplificador*2), amplificador/25);
          }

        //  rect(-posiX*(a), -posiY*(a), 0.2+(amplificador*2), amplificador/25);

        
            contador++;
        }

     //   console.log(q);
    }    
}

function determinarCores(contador){
    noStroke();
    if(contador == 0){
      stroke(0);
      fill(60,100,94);}
      
    else if(contador == 1){
      stroke(0,0,100);
      fill(335,100,100);}
      
    else if(contador == 2){
      stroke(284,88,20);
      fill(284,88,43);}
      
      else if(contador == 3){
      stroke(0);
      fill(186,89,100);}
   
      else if(contador == 4){
        stroke(325,48,25);
        fill(245,35,66);}
  
  }

function calculaHandles(){
    x3 = map(mouseX, centroX-100 , centroX+100 , -200 , 200.0);
    y3 = map(mouseY, centroY-100 , centroY+100 , -200 , 200.0);
    
    push();
    stroke(255);
    translate(centroX,centroY);
    line(x3/2 , y3/2 , x3/2 , 0);
    line(x3/2 , y3/2 , 0 ,y3/2);
    
    noFill();
    ellipse(0,0,x3,y3);pop();
}

function inputa(){
    if(mouseIsPressed){   
        raioX = x3*7;
        raioY = y3*7;
    }
}
