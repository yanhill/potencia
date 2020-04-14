var song;
var slider;

function setup() ;
  song = loadSound("twin_peaks_theme.mp3", loaded);
  slider = createSlider(0,1,0,0.01);
}

function loaded(){
  song.play();
}

function draw(){
  background(0);
  song.setVolume(slider.value());
}
  

