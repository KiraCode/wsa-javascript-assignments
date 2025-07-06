let a = prompt("Enter the Sentence");
let con = "";
for (let index = 0; index < a.length; index++) {
  if (a[index] === a[index].toUpperCase()) {
    con = con.concat(a[index].toLowerCase());
  } else if (a[index] === a[index].toLowerCase()) {
    con = con.concat(a[index].toUpperCase());
  } else {
    con = con.concat(" ");
  }
}
document.write(`The String entered : ${a}`);
document.write("<br>");
console.log(`The String entered : ${a}`);

document.write(`Conersion : ${con}`);
document.write("<br>");
console.log(`Conersion : ${con}`);
