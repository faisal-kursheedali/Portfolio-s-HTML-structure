/*// input
var username=prompt("what's your name?")
// processing
var welcomemessage= "Yes, I know that you're " + username
//output
alert(welcomemessage);*/
var btntranslate = document.querySelector("#btn-translate")
var inputtext = document.querySelector("#input-text")
var outputtext = document.querySelector("#output-text")
// outputtext.innerText = "ibru is good";
function clickEventHandler() {
      outputtext.innerText = "Banana " + inputtext.value;
};
btntranslate.addEventListener("click",clickEventHandler)