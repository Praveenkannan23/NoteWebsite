// select popup-overlay,popup-box,add-popup-button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox =document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


var cancelnote = document.getElementById("cancel-note")
cancelnote.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
//select add-Note,Note-Title-input,Note-content-input

var Container =document.querySelector(".Container")
var addnote = document.getElementById("add-Note")
var notetitleinput = document.getElementById("Note-Title-input")
var notecontentinput = document.getElementById("Note-content-input")

addnote.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","Note-container")
    div.innerHTML=`<h4>${notetitleinput.value}</h4>
            <p>${notecontentinput.value}</p>
            <button onclick="deletenote(event)">Delete</button>`
    Container.append(div)
})
// deletnote.addEventListener("click",function(event){
//     event.target.parentElement.remove()
// })
function deletenote(event)
{
    event.target.parentElement.remove()
}