let sentence = prompt("Enter the Sentence");

let position = Number(
  prompt("Enter the number which character's position to remove")
);
let array = sentence.split(" ");
let index = array.at(position - 1);
console.log(array.length);

document.write(`Input : ${sentence}`);
document.write("<br>");

document.write(`Position : ${position}`);
document.write("<br>");

if (position > array.length) {
  document.write(`You Have Entered a Invalid Position : ${position}`);
  document.write("<br>");
} else {
  document.write(`Number of characters : ${index.length}`);
  document.write("<br>");

  document.write(`Output : ${sentence.replace(index + " ", "")}`);
  document.write("<br>");
}
