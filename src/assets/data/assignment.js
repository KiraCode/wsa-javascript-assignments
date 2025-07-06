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
