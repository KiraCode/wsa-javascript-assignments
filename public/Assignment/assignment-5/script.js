document.write("Pattern 1 <br>");
for (let i = 1; i <= 4; i++) {
  for (let j = 0; j < i; j++) {
    document.write(`${i} `);
  }
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");

document.write("Pattern 2 <br>");
let k = 1;
for (let i = 1; i <= 4; i++) {
  for (let j = 0; j < i; j++) {
    document.write(`${k++} `);
  }
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");

document.write("Pattern 3 <br>");
for (let i = 0; i < 5; i++) {
  for (let j = 5; j > i; j--) {
    document.write(`* `);
  }
  document.write("<br>");
}
