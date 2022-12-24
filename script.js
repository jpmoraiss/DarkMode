function selectMode(mode) {

var image = "icons/fallen.png";
var color = "ghostWhite";
var label = "Light Mode";

if (mode === "light") {
    image = "icons/lampada.png";
    color = "ghostWhite";
    label = "Light Mode";
}
else if (mode === "dark") {
    image = "icons/fallen.png";
    color = "darkSlateBlue";
    label = "Dark mode";
    
}
else {
    image = "icons/png-clipart-ninja-ninja.png";
    color = "dimGray";
    label = "Ninja mode";
    
}

console.log(label);

document.getElementById("icon").src = image;
document.getElementById("theme").style.backgroundColor = color;
document.getElementById("theme2").style.backgroundColor = color;
document.getElementById("theme3").style.backgroundColor = color;
document.getElementById("label").innerHTML = label;


}