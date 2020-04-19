
var vol ;
var volsTodos = [];
var vols = [];
var volhistory = [];

var song;
var fft;
var spectrum;
var amp;
var maxVelocity;

function predefinicoesDoSom(){
    fft = new p5.FFT(0.7,64);
    amp = new p5.Amplitude;
}

function preload(){
    //song = loadSound('pg/metamorphosis.mp3');
    song = loadSound('5.mp3');
    //song = loadSound('LINN/bixaTravesty.mp3');
    //song = loadSound('TOE/EyeOfNight.mp3');
    //song = loadSound('TOE/thePassage.mp3');
  }

function comecaCalcularMedia(){
    vol = amp.getLevel();
    spectrum = fft.analyze();
    
    vols.push(vol);
    volsTodos.push(vol);
    
    if(vols.length == 1){
        var total = 0;
        
        if(volsTodos.length <= 50) var media = 0.01
        else {
            for(var i = 0; i < 50 ; i++){
                total += volsTodos[volsTodos.length-1 - i];
            }
            var media = total / 50;
        } 
        console.log(media);
        velocidadeParticulas = map(media, 0, 1, 0, maxVelocity);
        vols = [];
    }
}
