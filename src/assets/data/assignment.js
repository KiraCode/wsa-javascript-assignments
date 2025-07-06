// technology - programming logo
import htmlSVG from "../technology/html.svg";
import cssSVG from "../technology/css.svg";
import javascriptSVG from "../technology/javascript.svg";
import github from "../technology/github.svg";
import live from "../technology/live.png";

const html = {
  name: "Html",
  src: htmlSVG,
};
const css = {
  name: "Css",
  src: cssSVG,
};
const javascript = {
  name: "Javascript",
  src: javascriptSVG,
};

const assignmentHtml = (i) => {
  return `/Assignment/assignment-${i}/index.html`;
};

const imageName = (i) => {
  return `/Assignment/assignment-${i}/image.png`;
};

const details = [
  {
    id: 1,
    description:
      "Write a JavaScript Program to find the gross salary of a employee.",
    fileNames: ["index.html"],
    icons: [html, javascript],
  },
  {
    id: 2,
    description:
      "Write a JavaScript program to convert the given temperature in Fahrenheit to Celsius using the following conversion formula: C = F-32 / 1.8",
    fileNames: ["index.html"],
    icons: [html, javascript],
  },
  {
    id: 3,
    description:
      "Write a program to input time in hours(1hrs to 24hrs) and input am or pm as string, Display welcome message for the user.",
    fileNames: ["index.html"],
    icons: [html, css, javascript],
  },
  {
    id: 4,
    description:
      "Write a program to input three subjects marks and calculate average marks and display grade according to average marks",
    fileNames: ["index.html"],
    icons: [html, javascript],
  },
  {
    id: 5,
    description: "Write a program to print following Patterns :",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 6,
    description: "Write a program to print Fizz, buzz series",
    fileNames: ["index.html", "script.js"],
   icons: [html, javascript],
  },
  {
    id: 7,
    description: "Write a Javascript program to design a nim game.",
    fileNames: ["index.html", "script.js"],
   icons: [html, javascript],
  },
  {
    id: 8,
    description: "Write a Javascript program to determine whether the robot makes a circle or not.",
    fileNames: ["index.html", "script.js"],
   icons: [html, javascript],
  },
  {
    id: 9,
    description: "Write a program to generate following sum of series",
    fileNames: ["index.html", "script.js"],
   icons: [html, javascript],
  },
  {
    id: 10,
    description: "Write a program to input any two number and swap that without using third variable",
    fileNames: ["index.html", "script.js"],
   icons: [html, javascript],
  },
  {
    id: 11,
    description: "Write a program to generate Armstrong number of three digits",
    fileNames: ["index.html", "script.js"],
   icons: [html, javascript],
  },
  {
    id: 12,
    description: "Write a javascript program to swap the word from lowercase to uppercase and vice versa.",
    fileNames: ["index.html", "script.js"],
   icons: [html, javascript],
  },
  {
    id: 13,
    description: "Write a program to input a number and check whether it is odd or even",
    fileNames: ["index.html", "script.js"],
   icons: [html, javascript],
  },
];

export const assignment = details.map(
  ({ id, description, fileNames, icons }) => ({
    id,
    title: "Assignment ",
    image: imageName(id),
    description,
    view: {
      liveLink: assignmentHtml(id),
      gitLink: assignmentHtml(id),
      gitIcon: github,
      liveIcon: live,
    },
    fileNames,
    icons,
  })
);
