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

  for( var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height/2, 0);
    vertex(i, y);
  }

  endShape();

  if(volhistory.length > width/2){
    volhistory.splice(0,1)  
  }

  stroke(255,0,0);
  line(volhistory.length, 0, volhistory.length, height)
  }
  

