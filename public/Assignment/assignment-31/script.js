const name = prompt("Enter a String");
let str = "";

function reverse(s) {
  if (s === "") {
    return s;
  }
  return s.substring(s.length - 1) + reverse(s.substring(0, s.length - 1));
}

document.writeln(`Input: ${name} <br> Output: ${reverse(name)}`);
