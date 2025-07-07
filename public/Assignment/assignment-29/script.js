let sentence = prompt("Enter a Sentence");

document.write(`Input : ${sentence}`);
document.write(`<br>`);
sentence = sentence.split(" ").join("");
console.log(sentence);

let count = 0;

for (let index = 0; index < sentence.length; index++) {
  if (
    sentence[index] === "a" ||
    sentence[index] === "e" ||
    sentence[index] === "i" ||
    sentence[index] === "o" ||
    sentence[index] === "u"
  ) {
    count++;
  }
}

document.write(`Number of Vowels : ${count}`);
document.write(`<br>`);
console.log(count);
