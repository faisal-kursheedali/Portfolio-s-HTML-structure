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
