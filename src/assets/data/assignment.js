// technology - programming logo
import javascript from "../technology/javascript.svg";
import github from "../technology/github.svg";
import live from "../technology/live.png";

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
  },
  {
    id: 2,
    description:
      "Write a JavaScript program to convert the given temperature in Fahrenheit to Celsius using the following conversion formula: C = F-32 / 1.8",
    fileNames: ["index.html"],
  },
  {
    id: 3,
    description:
      "Write a program to input time in hours(1hrs to 24hrs) and input am or pm as string, Display welcome message for the user.",
    fileNames: ["index.html"],
  },
  {
    id: 4,
    description:
      "Write a program to input three subjects marks and calculate average marks and display grade according to average marks",
    fileNames: ["index.html"],
  },
  {
    id: 5,
    description:
      "Write a program to print following Patterns :",
    fileNames: ["index.html", "script.js"],
  },
];

export const assignment = details.map(({ id, description, fileNames }) => ({
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
  icons: [
    {
      name: "Javascript",
      src: javascript,
    },
  ],
}));
