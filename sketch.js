const density = "@&B9#SGHMh352AXsri;:,.                ";

// const density = "                            _.,-=+:;cba!?0123456789$W#@Ñ"
// const density = '       .:-i|=+%O#@'

let video;
let asciiDiv;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(64, 48);
  asciiDiv = createDiv();
}

// need to add mobile rear camera option 

// need to add record video option

// work on this

// practice macro push to git again again again


function draw() {
  video.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));
      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}
