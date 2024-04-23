function compress(val) {
    let result = '';
    let count = 1;

    for (let i = 0; i < val.length; i++) {
        if (val[i] === val[i + 1]) {
            count++;
        } else {
            result += val[i] + count;
            count = 1;
        }
    }

    return result;
}

function decompress(val) {
  let result = '';
  let currentChar = '';
  let count = '';

  for (let i = 0; i < val.length; i++) {
      if (!isNaN(parseInt(val[i]))) {
          count += val[i];
      } else {
          currentChar = val[i];
          result += currentChar.repeat(parseInt(count));
          count = '';
      }
  }

  return result;
}

let input = 'HHHeellloWooorrrrlld!!';
let input1 = 'H3e2l3o1W1o3r4l2d1!2';

console.log(compress(input));
console.log(decompress(input1))
