function decrypt(val, key) {
  text = val.toUpperCase()
  key = key.toUpperCase();

  let result = ''
  let keyIndex = 0

  for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i)

      if (charCode >= 65 && charCode <= 90) {
          let shift = key.charCodeAt(keyIndex) - 65
          let decryptedChar = ((charCode - 65 - shift + 26) % 26) + 65
          result += String.fromCharCode(decryptedChar)

          keyIndex = (keyIndex + 1) % key.length
      } else {
          result += text[i]
      }
  }

  return result;
}

let input = 'SGZVQBUQAFRWSLC';
let key = 'ACMSENDMOREMONK';

console.log(decrypt(input, key));
