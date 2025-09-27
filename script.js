// Simple login system
const USERS = [
  { username: "admin", password: "1212" },
  { username: "user", password: "pass" }
];

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  const message = document.getElementById("login-message");

  const validUser = USERS.find(user => user.username === u && user.password === p);

  if (validUser) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("editor-screen").style.display = "block";

    // Load saved text
    document.getElementById("editor").innerHTML = localStorage.getItem("savedText") || "Start typing here...";
    message.innerText = "";
  } else {
    message.innerText = "Invalid username or password!";
  }
}

// Text editor functions
function changeFont() {
  document.getElementById("editor").style.fontFamily = document.getElementById("font-family").value;
}

function changeSize() {
  document.getElementById("editor").style.fontSize = document.getElementById("font-size").value;
}

function changeTextColor() {
  document.getElementById("editor").style.color = document.getElementById("text-color").value;
}

function changeBackground() {
  document.getElementById("editor").style.backgroundColor = document.getElementById("bg-color").value;
}

// Save text in localStorage
function saveText() {
  const content = document.getElementById("editor").innerHTML;
  localStorage.setItem("savedText", content);
  alert("Text saved!");
}

// Clear text
function clearText() {
  document.getElementById("editor").innerHTML = "";
  localStorage.removeItem("savedText");
}
