// Array to store output
const output = ["> I’m a graduate in Computer Science", ">", "> E-mail" + "\xa0\xa0\xa0" + ": TanTSZ@cardiff.ac.uk", "> Phone" + "\xa0\xa0\xa0\xa0" + ": +44 7749471065", "> Location : Singapore"];

var i = 0; // initialise index
var position = 0; // initialise text position
var outputLength = output[0].length; // the length of the text array
var delay = 15; // print delay
var lineDelay = 300; // new line delay

function typeWriter() {
  text = ""; // initialise text
  var row = 0; // initialise row for text

  var location = document.getElementById("output");

  while (row < i) {
    text += output[row++] + "<br>";
  }

  location.innerHTML = text + output[i].substring(0, position);

  if (position++ == outputLength) {
    position = 0;
    i++;
    if (i != output.length) {
      outputLength = output[i].length;
      setTimeout("typeWriter()", lineDelay);
    }
  } else {
    setTimeout("typeWriter()", delay);
  }
}

typeWriter();
