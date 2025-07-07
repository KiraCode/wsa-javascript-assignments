let num = Number(prompt("Enter a number"));

document.write(`Input : ${num}`);
document.write("<br>");

let arr = [];
for (let index = 1; index <= num; index++) {
  if (num % index === 0) {
    arr.push(index);
  }
}

document.write(`factors of ${num} are : ${arr}`);
document.write("<br>");
