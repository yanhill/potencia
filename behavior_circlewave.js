var wave;
var song;
var button;

var volhistory = [];

function toggleSong(){
  if(song.isPlaying()){
    song.pause();
  } else {
    song.play();
  }
}

function preload(){
  song = loadSound('twin_peaks_theme.mp3');
}

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude;
}

function draw(){
  background(0);
  var vol = amp.getLevel();
  volhistory.push(vol); 
  stroke(255);
  noFill();
  beginShape();

  translate(width/2,height/2);
  for( var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 50, 800);
    var x = r * cos(i);
    var y = r * sin(i);

    vertex(x, y);
  }
  endShape();

  if(volhistory.length > 360){
    volhistory.splice(0,1)  
  }
  }
  

