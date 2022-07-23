/*// input
var username=prompt("what's your name?")
// processing
var welcomemessage= "Yes, I know that you're " + username
//output
alert(welcomemessage);*/
var btntranslate = document.querySelector("#btn-translate")
var textinput = document.querySelector("#text-input")
btntranslate.addEventListener("click",clickEventHandler)
function clickEventHandler() {
    console.log("clicked!");
    console.log("value", textinput.value);
}