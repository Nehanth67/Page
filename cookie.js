/*SWE642 Nehanth Chowdary Pavuluri G01413928*/
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEqual = name + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEqual) === 0) {
      return cookie.substring(nameEqual.length, cookie.length);
    }
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function displayGreeting() {
  var name = getCookie("username");
  var currentTime = new Date();
  var currentHour = currentTime.getHours();
  var greeting;

  if (name) {
    var nameElement = document.getElementById("name");
    nameElement.textContent = name;

    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
  } else {
    var userInput = prompt("Please enter your name:");
    if (userInput) {
      setCookie("username", userInput, 7);
      location.reload(); // Reload the page to display the greeting with the new name
    }
  }

  var greetingElement = document.getElementById("greeting");
  greetingElement.textContent = greeting + (name ? ", " + name : "") + ", Welcome to SWE642 Student Survey Form.";
}

function resetName() {
  var userInput = prompt("Please enter your name:");
  if (userInput) {
    setCookie("username", userInput, 7);
    location.reload(); // Reload the page to display the greeting with the new name
  }
}

function deleteName() {
  deleteCookie("username");
  location.reload(); // Reload the page to prompt for a new name
}
