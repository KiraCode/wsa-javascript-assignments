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
    icons: [html, javascript],
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
    description:
      "Write a Javascript program to determine whether the robot makes a circle or not.",
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
    description:
      "Write a program to input any two number and swap that without using third variable",
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
    description:
      "Write a javascript program to swap the word from lowercase to uppercase and vice versa.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 13,
    description:
      "Write a program to input a number and check whether it is odd or even",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 14,
    description: "Write a program to generate Fibonacci series.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 15,
    description:
      "Write a Javascript Function to generate the unique PIN number of given length n",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 16,
    description:
      "Write a program to input 10 numbers in an array and count total positive and negative number",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 17,
    description:
      "Write a progriam to join all the element of an array into string.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 18,
    description:
      "Write a program to compute sum and product of array of integer.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 19,
    description:
      "Write a program to arrange the element of an array in ascending and descending order.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 20,
    description:
      "Given an array of 2n integers, write a JavaScript program to find sum of min(ai, bi)",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 21,
    description:
      "Write a Javascript program to determine the perimeter of the island.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 22,
    description:
      "Write a Javascript program to scramble the word to given position.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 23,
    description:
      "Write a JavaScript program to remove specified number of characters from a string",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 24,
    description:
      "Write a JavaScript program to split a string and convert it into array of words.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 25,
    description:
      "Write a JavaScript program to capitalize the first letter of each word in a string.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 26,
    description: "Write a JavaScript program to reverse a given string",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 27,
    description:
      "Write a Javascript program to display the longest word from the given string",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 28,
    description:
      "Write a Javascript program to Write a JavaScript function to check whether it is palindrome or not.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 29,
    description:
      "Write a JavaScript function to count the number of vowels in a string.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 30,
    description:
      "Write a JavaScript function to accept a parameter as a string and converts the first letter of each word in uppercase letter.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 31,
    description: "Write a JavaScript recursive function to reverse a string",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 32,
    description: "Write a JavaScript program to search a date within a string",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 33,
    description:
      "Write a JavaScript program that works as a trim() function using regular expression",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 34,
    description:
      "Write a JavScript function to find factors of a positive integer.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 35,
    description:
      "Write a JavaScript program to create , delete employee object and find the length of employee object.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 36,
    description:
      "Write a JavaScript program to find area and perimeter of rectangle",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 37,
    description: "Create a object and add a property by using prototype.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 38,
    description:
      "Create a Object and get the properties from other object by using Inheritance.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 39,
    description:
      "Write a JavaScript program to display the hello message along with the user name.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 40,
    description:
      "Write a JavaScript program to change the content of paragraph.",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 41,
    description:
      "Write a JavaScript program to find area of triangle where length of the 3 sides are given by the user",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 42,
    description:
      "Write a JavaScript program to create a paragraph , two buttons and borderImg using HTML",
    fileNames: ["index.html", "style.css", "script.js"],
    icons: [html, css, javascript],
  },
  {
    id: 43,
    description: "Write a JavaScript to display a image",
    fileNames: ["index.html", "style.css", "script.js"],
    icons: [html, css, javascript],
  },
  {
    id: 44,
    description:
      "Write a JavaScript to modify the style of paragraph , while clicking the button font , font size and color of the pargaraph will be changed",
    fileNames: ["index.html", "style.css", "script.js"],
    icons: [html, css, javascript],
  },
  {
    id: 45,
    description:
      "Write a JavaScript function to get the value of href, hreflang, rel, target and type attributes of the specified links",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 46,
    description:
      "Write a JavaScript program to count , display and remove items from a dropdown list",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 47,
    description:
      "Write a JavaScript program to create paragarph and buttons and change allignment dynamically by using getElementByTagName().",
    fileNames: ["index.html", "style.css", "script.js"],
    icons: [html, css, javascript],
  },
  {
    id: 48,
    description:
      "Write a JavaScript program to create three paragraphs with different class name and manipulate style rules using CSS class selectors",
    fileNames: ["index.html", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 49,
    description:
      "Write a JavaScript program to make a paragraph using createElement method , create a new node with nave element , create text node with strong element and add two node int parent node",
    fileNames: ["index.html", "style.css", "script.js"],
    icons: [html, css, javascript],
  },
  {
    id: 50,
    description:
      "Write a JavaScript program for open ,resize ,scroll and move the google search window",
    fileNames: ["index.html", "style.css", "script.js"],
    icons: [html, css, javascript],
  },
  {
    id: 51,
    description:
      "Write a JavaScript program to display your name in every 30 seconds using timer",
    fileNames: ["index.html", "style.css", "script.js"],
    icons: [html, css, javascript],
  },
  {
    id: 52,
    description:
      "Write a JavaScript program create page in html , track how many times user visited your page using cookie , display info to user , date and time , display message if user is first vist",
    fileNames: ["index.html", "style.css", "script.js"],
    icons: [html, javascript],
  },
  {
    id: 53,
    description:
      "Write a JavaScript function to check whether a string contains alpha, dash and underscore.",
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
