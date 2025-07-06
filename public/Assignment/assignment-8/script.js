let moves = prompt(
  "Enter the Robot moves like R (Right), L (Left), U (Up) and D (down)."
);

let robot = moves.toUpperCase().split("");

let sum = 0;
for (let index = 0; index < robot.length; index++) {
  if (robot[index] === "R") {
    sum = sum + 1;
  } else if (robot[index] === "L") {
    sum = sum - 1;
  } else if (robot[index] === "U") {
    sum = sum + 1;
  } else if (robot[index] === "D") {
    sum = sum - 1;
  }
}

if (sum === 0) {
  document.write("The Robot Moves Entered : " + moves.toUpperCase());
  document.write("<br>");

  document.write(`Robot Makes a Circle : ${sum === 0} `);
  console.log(sum === 0);
} else {
  document.write("You have enter the Wrong Direction");
  document.write("<br>");
  document.write(`Robot Does Not Makes a Circle : ${sum === 0} `);
  console.log(sum === 0);
}
