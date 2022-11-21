const theButton = document.querySelector("button")
console.log(theButton)

let theMain = document.querySelector("body")
let theTxt = document.getElementById("theText")

theButton.addEventListener("click",changeColor)

function changeColor(){
    console.log("hi")
    theTxt.textContent = "I want to change"
    theMain.style.backgroundColor = "pink"
}