let n = prompt("Enter the Number");

let sum = 0;
let a = 0;
let b = 0;
while (1 <= n) {
  a = a + 1 / n;
  b = b + 2 * n;
  n--;
}

document.write("a) " + a);
document.write("<br>");
console.log(a);
document.write("b) " + b);
document.write("<br>");
console.log(b);
