let size = Number(prompt("Enter the Size of String Array"));
let array = [];

for (let index = 0; index < size; index++) {
  array.push(prompt("Enter a String"));
}
calulate(array);

function calulate(array) {
  let sentence = "";
  for (let index = 0; index < array.length; index++) {
    sentence = sentence.concat(array[index] + " ");
  }

  document.write(`String Array : [${array}]`);
  document.write("<br>");
  console.log(`String Array : [${array}]`);

  document.write(`Sentence : ${sentence}`);
  document.write("<br>");
  console.log(`Sentence : ${sentence}`);
  console.log(`----------------------------------------`);
}
