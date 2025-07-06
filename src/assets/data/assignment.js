// technology - programming logo
import css from "../technology/css.svg";
import html from "../technology/html.svg";
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
      "The web page which will redirect the user to another page automatically. The web page showing the information like keywords, description, and a title",
    fileNames: ["index.html", "redirected.html"],
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
      name: "Html",
      src: html,
    },
    {
      name: "Css",
      src: css,
    },
  ],
}));
