function capitalize(val) {
  var result = '';
  
  for (let i of val.split('-')) {
    result += i.charAt(0).toUpperCase();
  }
  
  return result;
}

let input = 'Knuth-Morris-Pratt';
let input1 = 'Mirko-Slavko';
let input2 = 'Pasko-Patak';

console.log(capitalize(input));
console.log(capitalize(input1));
console.log(capitalize(input2));