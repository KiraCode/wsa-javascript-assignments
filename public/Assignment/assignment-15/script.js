let size = Number(
  prompt("Enter the number to generate the unique PIN number of given length")
);

let sum = 0;
let p = 1;
while (size > 0) {
  let n = Math.random();
  sum = sum * 10 + Math.floor(n * 10);
  size--;
}
document.write("PIN : " + sum);
console.log(sum);
