// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u, y) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  const vowels = "aeiouyAEIOUY";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result += vowels.includes(char) ? "*" : char;
  }
  return result;
}

console.log(replaceVowels("hello world")); // "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // "J*v*scr*pt"

module.exports = replaceVowels;