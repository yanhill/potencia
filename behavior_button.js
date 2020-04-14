var song;
var button;
var amp;

function setup() {
  createCanvas(200,200);
  song = loadSound("twin_peaks_theme.mp3", loaded);
  amp = new p5.Amplitude();
}

function togglePlaying(){
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("stop");
  } else {
    song.stop();
    button.html("play");
  }
}

function loaded(){
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function draw(){
  background(0);

  var vol = amp.getLevel();
  var diam = map(vol,0,0.3,10,200);

  fill(255,0,255);
  ellipse(width/2,height/2,diam,diam)
  ellipse(width/2,height/2,diam,diam)
}
  

