var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
let randomColorGenerator = document.querySelector("#random_color_generator");

function setGradient(){
    setGradientColors(color1.value, color2.value);
}

function setGradientColors(firstColor, secondColor){
    body.style.background = "linear-gradient(to right, "
    + firstColor
    + ", "
    + secondColor
    + ")";
    css.textContent = body.style.background + ";";
}

function createRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function updateInputs(firstColor, secondColor){
    if(firstColor.length===7&&secondColor.length===7){
        color1.value = firstColor;
        color2.value = secondColor;
    }
}

function setRandomBackgroundColor(){
    let firstColor = createRandomColor();
    let secondColor = createRandomColor();
    setGradientColors(firstColor, secondColor);
    updateInputs(firstColor, secondColor);
}


setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomColorGenerator.addEventListener("click", setRandomBackgroundColor);
