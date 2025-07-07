let sentence = prompt("Enter a sentence");
let len = sentence[0].length;
let s = "";

document.write(`Input : ${sentence}`);
document.write("<br>");

sentence = sentence.split(" ");
for (let index = 0; index < sentence.length; index++) {
  if (sentence[index].length > len) {
    len = sentence[index].length;
  }
}
const arr = [];

for (let index = 0; index < sentence.length; index++) {
  if (sentence[index].length === len) {
    arr.push(sentence[index]);
  }
}

document.write(`Output : ${arr.join(" ")}`);
document.write("<br>");

console.log(arr.join(" "));
