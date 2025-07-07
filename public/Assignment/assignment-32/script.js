let trimmy = prompt("Enter a String that contains Date");
document.write(`Input : ${trimmy} <br>`);
let regex = /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{1,4}/gm;
console.log(trimmy.match(regex));
document.write(`Dates in the string are : ${trimmy.match(regex)} <br>`);
