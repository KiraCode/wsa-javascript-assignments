let trimmy = prompt("Enter a String");

document.write(`Input : ${trimmy} <br>`);

let regex = /^(\s+)|(\s+)$/gm;
console.log(trimmy.match(regex));
document.write(`Dates in the string are : ${trimmy.replace(regex, "")} <br>`);
console.log(`"${trimmy}"`);
console.log(`"${trimmy.replace(regex, "")}"`);
