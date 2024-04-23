function quadrantSelection(x, y) {
  if (x > 0 && y > 0) {
      return 1
  } else if (x < 0 && y > 0) {
      return 2
  } else if (x < 0 && y < 0) {
      return 3
  } else if (x > 0 && y < 0) {
      return 4 
  } else {
      return "invalid input";
  }
}

let x = 10;
let y = 6;

let x1 = 9;
let y1 = -13;

console.log(quadrantSelection(x, y));
console.log(quadrantSelection(x1, y1));
