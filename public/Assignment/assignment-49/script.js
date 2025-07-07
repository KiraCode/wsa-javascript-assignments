function createPara() {
  let p = document.createElement("p");
  p.innerHTML = "This is Paragraph";
  document.body.appendChild(p);
}

function createNav() {
  let nav = document.createElement("nav");
  let a1 = document.createElement("a");
  let br = document.createElement("br");

  a1.setAttribute("href", "https://www.google.co.uk/");
  a1.innerText = "Google";
  nav.appendChild(a1);
  nav.appendChild(br);

  let a2 = document.createElement("a");
  a2.setAttribute("href", "http://goto.com/");
  a2.innerText = "GoTo";
  nav.appendChild(a2);
  document.body.appendChild(nav);
}

function createStrong() {
  let p = document.createElement("p");
  let strong = document.createElement("strong");
  strong.innerHTML = "Paragraph with Strong";
  p.appendChild(strong);
  document.body.appendChild(p);
}
