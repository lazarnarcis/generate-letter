let patrat = document.getElementById("p");
var style = patrat.currentStyle || window.getComputedStyle(patrat);
    
function move (pos) {
    if (pos == "left") {
        patrat.style.marginRight = parseInt(style.marginRight) + 50 + "px";
    } else if (pos == "right") {
        patrat.style.marginLeft = parseInt(style.marginLeft) + 50 + "px";
    } else if (pos == "top") {
        patrat.style.marginBottom = parseInt(style.marginBottom) + 50 + "px";
    } else if (pos == "bottom") {
        patrat.style.marginTop = parseInt(style.marginTop) + 50 + "px";
    } 
    show();
    generateLetter();
}

function generateLetter () {
    let letter = "";
    let letters = "abcdefghijklmnopqrstuvwxyz";

    let lowUp = Math.floor((Math.random() * 2) + 1);

    if (lowUp == 2) letters = letters.toUpperCase();
    
    let randomNr = Math.floor((Math.random() * letters.length) + 0);
    letter = letters[randomNr];

    patrat.innerHTML = letter;

    return letter;
}

function show () {
    console.log(`
        Margin Left: ${style.marginLeft},
        Margin Bottom: ${style.marginBottom},
        Margin Top: ${style.marginTop},
        Margin Right: ${style.marginRight},
    `);
}

document.addEventListener("keydown", function onEvent(event) {
    if (event.keyCode == 38) {
        move("top");
    }
    if (event.keyCode == 40) {
        move("bottom");
    }
    if (event.keyCode == 39) {
        move("right");
    } 
    if (event.keyCode == 37) {
        move("left");
    }
});

show();