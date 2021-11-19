// noprotect
var soundFile = document.createElement("audio");
function setup() {
  //Create the audio tag
  soundFile.preload = "auto";

  //Load the sound file (using a source element for expandability)
  var src = document.createElement("source");
  src.src =  "../tv-static-01.mp3";
  soundFile.appendChild(src);
  //Load the audio tag
  //It auto plays as a fallback
  soundFile.load();
  soundFile.volume = 0.000000;
  soundFile.play();

  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  for (var x = 0; x <= canvas.width; x++) {
    for (var y = 0; y <= canvas.width; y++) {
      set(x, y, Math.floor(Math.random() * 256));
    }
  }
  updatePixels();
  playStatic();
}

function playStatic() {
   //Set the current time for the audio file to the beginning
   soundFile.currentTime = 0.01;
   soundFile.volume = 100;

   //Due to a bug in Firefox, the audio needs to be played after a delay
   setTimeout(function(){soundFile.play();},1);
}
