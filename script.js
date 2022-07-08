var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
let randomColorGenerator = document.querySelector("#random_color_generator");

function setGradient(firstColor=color1.value, secondColor=color2.value){
    body.style.background = "linear-gradient(to right, "
    + firstColor
    + ", "
    + secondColor
    + ")";
    //css.textContent = body.style.background + ";";
    css.appendChild(document.createTextNode(body.style.background + ";"));
}

function createRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function setRandomBackgroundColor(){
    setGradient(createRandomColor(), createRandomColor());
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomColorGenerator.addEventListener("click", setRandomBackgroundColor);
