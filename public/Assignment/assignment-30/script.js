let sentence = prompt("Enter a sentence");
capitalise(sentence);

function capitalise(s) {
  let array = s.split(" ");
  let str = " ";

  for (let index = 0; index < array.length; index++) {
    str = str.concat(
      array[index].substring(0, 1).toUpperCase() +
        array[index].substring(1) +
        " "
    );
  }
  document.write(`Input : ${s}`);
  document.write("<br>");
  document.write(`Output : ${str}`);
}
