document.write("Armstrong Number are : ");
for (let index = 100; index < 1000; index++) {
  let n = index;
  let sum = Number(0);
  while (n > 0) {
    var r = Number(n % 10);
    sum = sum + r * r * r;
    n = parseInt(n / 10);
  }
  if (sum === index) {
    document.write(index + " ");
    console.log(index);
  }
}
