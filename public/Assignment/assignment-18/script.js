let size = Number(prompt("Enter the size of array"));

let array = [];
for (let index = 0; index < size; index++) {
  array.push(Number(prompt("Enter the number")));
}
calulate(array);

function calulate(array) {
  let sum = 0;
  let product = 1;
  for (let index = 0; index < array.length; index++) {
    sum = sum + Number(array[index]);
    product = product * Number(array[index]);
  }

  document.write();
  document.write("<br>");

  console.log(`Array : [${array}]`);
  document.write(`Array : [${array}]`);
  document.write("<br>");

  console.log(`SUM : ${sum}`);
  document.write(`SUM : ${sum}`);
  document.write("<br>");

  console.log(`PRODUCT : ${product}`);
  document.write(`PRODUCT : ${product}`);
  document.write("<br>");

  console.log(`----------------------------------------`);
}
