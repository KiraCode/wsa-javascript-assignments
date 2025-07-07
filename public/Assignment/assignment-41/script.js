let a = Number(prompt("Enter a Side 1"));
let b = Number(prompt("Enter a Side 2"));
let c = Number(prompt("Enter a Side 3"));

let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
document.write("The Area of Triangle");
document.write("<br>");
document.write(`Area of triangle = ${area}`);
