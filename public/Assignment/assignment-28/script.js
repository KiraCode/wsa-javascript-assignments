let word = prompt("Enter a Number or Word");
document.write(`Input : ${word}`);
document.write("<br>");
let s = "";

for (let index = word.length - 1; index >= 0; index--) {
  s = s.concat(word[index]);
}

if (word === s) {
  document.write("Output : Palindrome");
} else {
  document.write("Output : Not Palindrome");
}
