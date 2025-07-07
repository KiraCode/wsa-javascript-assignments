let size = Number(prompt("Enter the Size of String Array"));
let array = [];

for (let index = 0; index < size; index++) {
  array.push(Number(prompt("Enter a Number")));
}
calulate(array);

function calulate(array) {
  let positive = 0;
  let negative = 0;
  for (let index = 0; index < array.length; index++) {
    if (Number(array[index]) > 0) {
      positive++;
    } else if (Number(array[index]) < 0) {
      negative++;
    }
  }
  console.log(`Array: [${array}]`);
  document.write(`Array: [${array}]`);
  document.write("<br>");

  console.log(`Positive Numbers : ${positive}`);
  document.write(`Positive Numbers : ${positive}`);
  document.write("<br>");

  console.log(`Negative Numbers : ${negative}`);
  document.write(`Negative Numbers : ${negative}`);
  document.write("<br>");

  console.log(`----------------------------------------`);
}
