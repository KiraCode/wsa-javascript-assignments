let s = prompt("Enter a String");
let n = s.length;
let str = "";
let array = [];

for (let i = 0; i < s.length; i++) {
  let num = Number(prompt(`Enter a position from 0 to ${s.length - 1}`));
  array.push(num);
  if (num < s.length) {
    str = str + s[num];
  } else {
    document.write("Index is Out of Bound");
    break;
  }
}

document.write(`String : ${s}`);
document.write(`<br>`);
document.write(`Position : ${array}`);
document.write(`<br>`);
document.write(`Output : ${str}`);
