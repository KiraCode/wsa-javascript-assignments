let size = Number(prompt("Enter the a size of array"));

let array = [];
for (let index = 0; index < size; index++) {
  array.push(Number(prompt("Enter a Number")));
}

console.log(array);

let sort = [];
for (let index = 0; index < size; index++) {
  let temp = index;
  for (let j = index + 1; j < size; j++) {
    if (array[j] < array[temp]) {
      temp = j;
    }
  }
  let swap = array[temp];
  array[temp] = array[index];
  array[index] = swap;
}

document.write("Ascending Order : " + array);
document.write("<br>");
console.log("Ascending Order : " + array);

document.write("Decending Order : " + array.reverse());
document.write("<br>");
console.log("Decending Order : " + array.reverse());
