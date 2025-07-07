function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

function trackVisits() {
  const visitCount = getCookie("visitCount");
  const lastVisit = getCookie("lastVisit");
  const now = new Date();
  const formattedTime = now.toLocaleString();

  if (!visitCount) {
    document.getElementById("message").innerText =
      "Welcome! This is your first visit.";
    setCookie("visitCount", 1, 365);
  } else {
    const newCount = parseInt(visitCount) + 1;
    document.getElementById(
      "message"
    ).innerText = `Welcome back! You have visited this page ${newCount} times.`;
    document.getElementById(
      "lastVisit"
    ).innerText = `Your last visit was on: ${lastVisit}`;
    setCookie("visitCount", newCount, 365);
  }

  setCookie("lastVisit", formattedTime, 365);
  document.getElementById(
    "currentVisit"
  ).innerText = `Current visit: ${formattedTime}`;
}
