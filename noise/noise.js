function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  for (var x = 0; x <= canvas.width; x++) {
    for (var y = 0; y <= canvas.width; y++) {
      set(x, y, Math.floor(Math.random() * 256));
    }
  }
  updatePixels();
}
