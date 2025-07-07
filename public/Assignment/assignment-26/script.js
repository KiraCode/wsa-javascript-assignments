let word = prompt("Enter a word");

let array = word.split("");
let s = "";
for (let index = array.length - 1; index >= 0; index--) {
  s = s.concat(array[index]);
}

document.write(`Input : ${word}`);
document.write("<br>");
document.write(`Output in reverse : ${s}`);
