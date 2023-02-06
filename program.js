
var credit_card = document.getElementById("project1")
var project1img = document.getElementById("prj1img")
prj1img.style.display = "none"
function colourChange(){
 credit_card.style.color = "darkblue"
}
function showproject1(){
if(prj1img.style.display === "none"){
 prj1img.style.display ="block";}
 else{
prj1img.style.display = "none";}
}
credit_card.onmouseover = colourChange
credit_card.onmouseleave = ()=>{credit_card.style.color = ""}
credit_card.onclick = showproject1
