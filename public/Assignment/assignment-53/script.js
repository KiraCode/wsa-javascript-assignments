const str = prompt("Enter the String");

const regex = /[-_0-9]+$/;
const ans = regex.test(str)
  ? `String contains alpha, numeric, dash`
  : `String doesn’t contain alpha, numeric or dash.`;
console.log(regex.test(str));

document.writeln(`Input : ${str} <br> Output : ${ans}`);
