var wave;
var song;
var button;
var fft;

var volhistory = [];

function toggleSong(){
  if(song.isPlaying()){
    song.pause();
  } else {
    song.play();
  }
}

function preload(){
  song = loadSound('pg/metamorphosis.mp3');
}

function setup() {
  createCanvas(1356,800);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.5,64);
  w = width / 64;
}

function draw(){
  background(0);
  stroke(255);



  var spectrum = fft.analyze();
//  console.log(spectrum);

  for(var i = 0 ; i < spectrum.length ; i++){
      var amp = spectrum[i];
      var y = map(amp, 0, 256 ,height ,0);
      
      translate(5,0);

      if(i % 5 == 0){
        fill(255,0,0);
      }
      else {
        fill(255);
      }
      rect(i * w, y, w, height - y);



      text(i,i * w,height - 10)

     // line(i,height,i,spectrum[i])
  }


  }
  

