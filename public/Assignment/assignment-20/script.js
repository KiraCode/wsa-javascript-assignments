let len = Number(prompt("Enter the Lenght of Array "));

let array = [];
for (let index = 0; index < len; index++) {
  array.push(Number(prompt("Enter the number")));
}

calculate(array);

function calculate(array) {
  let n = 0;
  let sum = 0;
  while (n < array.length) {
    sum = sum + Math.min(array[n], array[n + 1]);
    n = n + 2;
  }

  document.write("Array : " + array);
  console.log("Array : " + array);

  document.write("<br>");

  document.write(`Sum of min : ${sum}`);
  console.log(`Sum of min : ${sum}`);
  console.log("----------------------------");
}
