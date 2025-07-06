let n = Number(prompt("Enter the Number"));

let a = 0;
let b = 1;
let c = 0;

console.log(`Fibonacci series of ${n} are :`);
document.write(`${a} `);
document.write("<br>");
console.log(`${a} `);

document.write(`${b} `);
document.write("<br>");
console.log(`${b} `);

for (let index = 1; index <= n - 2; index++) {
  c = a + b;
  console.log(`${c}`);
  document.write(`${c} `);
  document.write("<br>");

  a = b;
  b = c;
}
