// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char < "0" || char > "9") {
      result = char + result;
    }
  }
  return result;
}

console.log(reverseWithoutNumbers("hello123world456")); // "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // "zyxabc"

module.exports = reverseWithoutNumbers;