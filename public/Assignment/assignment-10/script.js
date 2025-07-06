let n1 = Number(prompt("Enter the Number 1"));
let n2 = Number(prompt("Enter the Number 2"));

document.write("Before Swap " + n1 + ", " + n2);
document.write("<br>");
console.log("Before Swap " + n1, n2);

let sum = 0;

sum = n1 + n2;
n2 = sum - n2;
n1 = sum - n1;

document.write("After Swap " + n1 + ", " + n2);
document.write("<br>");
console.log("After Swap " + n1, n2);
