const USER_ID = localStorage.getItem("userID")
  ? localStorage.getItem("userID")
  : Date.now() + Math.random();
localStorage.setItem("userID", USER_ID);
const dateTime = new Date().toISOString();
let serverURL = "https://insta-profile-link.vercel.app/api";
// let serverURL = "http://localhost:3000/api";

fetch(`${serverURL}/portfolio/${USER_ID}/${dateTime}`)
  .then((res) => res.json())
  .then((val) => console.log(val));

var username = prompt("what's your name?");
username === null || username === "" ? (username = "null") : null;
fetch(
  `${serverURL}/portfolio_name_give/${username.toString()}/${USER_ID}/${dateTime}`
)
  .then((res) => res.json())
  .then((val) => console.log(val));

// processing
var welcomemessage =
  username +
  ", you're special✨ & You deserve a star💫\n\nI appreciate your curiosity to know about me.\nThanks for caring.\nYou brighten my day and make me happy😀 \n\n You’re the best💛, thank you " +
  username;
//output
alert(welcomemessage);
window.location.href = "./home.html";
