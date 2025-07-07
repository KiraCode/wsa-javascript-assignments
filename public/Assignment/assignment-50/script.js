let newWindow;

function openGoogle() {
  newWindow = window.open(
    "https://www.google.com",
    "_blank",
    "width=800,height=600"
  );
}

function resizeWindow() {
  if (newWindow) {
    newWindow.resizeTo(600, 400);
    console.log(newWindow);
  } else {
    alert("Please open a window first using the Create button.");
  }
}

function scrollWindow() {
  if (newWindow) {
    newWindow.scrollBy(10, 0);
    console.log(newWindow);
  } else {
    alert("Please open a window first using the Create button.");
  }
}

function moveWindow() {
  if (newWindow) {
    newWindow.moveBy(50, 50);
    console.log(newWindow);
  } else {
    alert("Please open a window first using the Create button.");
  }
}
