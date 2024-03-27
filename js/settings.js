//PLACEHOLDER - lightmode by default
//TODO: change to keep user preference

window.addEventListener("load", (event) => {
    document.body.classList.add("lightMode");
    settingsMenu.classList.add("settingsLightMode");
    document.getElementById("playIcon").style.filter = "invert(0)";
    document.getElementById("bgImg").style.filter = "invert(0)";

    document.getElementById("DarkModeBtn").checked = false;
    document.getElementById("SimpleFontBtn").checked = false;
});




// ----------------------------------------
//  DARK/LIGHT MODE
// ----------------------------------------
var darkModeToggle = document.getElementById("DarkModeBtn"); //get the checkbox to a variable

//if the checkbox state is changed, run a function
darkModeToggle.addEventListener("change", function () {
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

    document.getElementById("playIcon").style.filter = "invert(1)";
    document.getElementById("bgImg").style.filter = "invert(1)";
}

function darkModeInActive() {
    settingsMenu.classList.remove("settingsDarkMode");
    settingsMenu.classList.add("settingsLightMode");
    document.body.classList.remove("darkMode");
    document.body.classList.add("lightMode");

    document.getElementById("playIcon").style.filter = "invert(0)";
    document.getElementById("bgImg").style.filter = "invert(0)";
}

// ----------------------------------------
//  SIMPLE FONT MODE
// ----------------------------------------

var simpleFontToggle = document.getElementById("SimpleFontBtn"); //get the checkbox to a variable

//if the checkbox state is changed, run a function
simpleFontToggle.addEventListener("change", function () {
    //check if the checkbox is checked or not
    if (simpleFontToggle.checked) {
        console.log("Simple Font Mode on");
        document.getElementById("homeNavMenu").style.fontFamily = "Arial";
    } else {
        console.log("Simple Font Mode off");
        document.getElementById("homeNavMenu").style.fontFamily = "'Gerak', 'Comic Sans', sans-serif";
    }
});