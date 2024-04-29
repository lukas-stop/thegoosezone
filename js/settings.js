//PLACEHOLDER - lightmode by default
//TODO: change to keep user preference

window.addEventListener("load", (event) => {
    document.body.classList.add("lightMode");
    settingsMenu.classList.add("settingsLightMode");
    document.getElementById("playIcon").style.filter = "invert(0)";
    document.getElementById("pauseIcon").style.filter = "invert(0)";

    document.getElementById("DarkModeBtn").checked = false;
    document.getElementById("SimpleFontBtn").checked = false;
});

//DROPDOWN PLAY

//TODO: find a more graceful method of handling animations
var settingsMenuToggle = document.getElementById("settingsMenuToggleJS");
settingsMenuToggle.addEventListener("click", e => {
    if (settingsMenu.classList.contains("openMenu")) {
        settingsMenu.classList.remove("openMenu");
    }
    else {
        settingsMenu.classList.add("openMenu");
    }
});

// TOGGLEABLES -------------------------------------------------

// ----------------------------------------
//  ANIMATIONS TOGGLE
// ----------------------------------------

var bgIMGPNG = document.getElementById("bgImgPNGJS");
var bgIMGGIF = document.getElementById("bgImgGIFJS");
var animationsToggle = document.getElementById("AnimationsBtn");
var animationActive = false;

//console.log(animationsToggle.checked);
animationsToggle.addEventListener("click", e => { toggleAnimation(animationsToggle.checked) });

//TODO: check implentation (freeze frame over random png?)
function toggleAnimation(checkAnimation) {
    if (checkAnimation === true) {
        console.log(checkAnimation);
        console.log("turning on animation");

        bgIMGGIF.removeAttribute("hidden");
        bgIMGPNG.setAttribute("hidden", "");

        //animationActive = true;
        //animationsToggle.checked = true;
    }
    else {
        console.log(checkAnimation);
        console.log("turning off animation");

        bgIMGGIF.setAttribute("hidden", "");
        bgIMGPNG.removeAttribute("hidden");

        //animationActive = false;
        //animationsToggle.checked = false;
    }
}


// ----------------------------------------
//  DARK/LIGHT MODE
// ----------------------------------------
var darkModeToggle = document.getElementById("DarkModeBtn"); //get the checkbox to a variable

//if the checkbox state is changed, run a function
darkModeToggle.addEventListener("change", e => {
    //check if the checkbox is checked or not
    if (darkModeToggle.checked) {
        console.log("Dark mode on");
        darkModeActive();
    } else {
        console.log("Dark mode off");
        darkModeInActive();
    }
});

var settingsMenu = document.getElementById("settingsMenuJS");

function darkModeActive() {
    settingsMenu.classList.remove("settingsLightMode");
    settingsMenu.classList.add("settingsDarkMode");
    document.body.classList.remove("lightMode");
    document.body.classList.add("darkMode");

    bgIMGGIF.style.filter = "invert(1)";
    bgIMGPNG.style.filter = "invert(1)";
    document.getElementById("gearIconJS").style.filter = "invert(0)";
}

function darkModeInActive() {
    settingsMenu.classList.remove("settingsDarkMode");
    settingsMenu.classList.add("settingsLightMode");
    document.body.classList.remove("darkMode");
    document.body.classList.add("lightMode");

    bgIMGGIF.style.filter = "invert(0)";
    bgIMGPNG.style.filter = "invert(0)";
    document.getElementById("gearIconJS").style.filter = "invert(1)";
}

// ----------------------------------------
//  SIMPLE FONT MODE
// ----------------------------------------

var simpleFontToggle = document.getElementById("SimpleFontBtn"); //get the checkbox to a variable

//if the checkbox state is changed, run a function
simpleFontToggle.addEventListener("change", e => {
    //check if the checkbox is checked or not
    if (simpleFontToggle.checked) {
        console.log("Simple Font Mode on");
        document.getElementById("homeNavMenu").style.fontFamily = "Arial";
    } else {
        console.log("Simple Font Mode off");
        document.getElementById("homeNavMenu").style.fontFamily = "'Gerak', 'Comic Sans', sans-serif";
    }
});

