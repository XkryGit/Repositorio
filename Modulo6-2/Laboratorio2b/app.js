//Formula
let generates = [];
let numberrandom = 0;
var existe = false;
function generatenumberrandom(n, min, max) {
  return random(n, min, max);
}
function random(n, min, max) {
  while (generates.length !== n) {
    numberrandom = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!norepeat(generates, numberrandom)) {
      generates.push(numberrandom);
    }
  }
}
var norepeat = (generates, numberrandom) => {
  for (var i = 0; i < generates.length; i++) {
    if (generates[i] === numberrandom) {
      return true;
    }
  }
  return false;
};
generatenumberrandom(3, 0, 2);
console.log(generates);
console.log(existe);
