//PLACEHOLDER - lightmode by default
//TODO: change to keep user preference
document.body.classList.add("lightMode");
var checkbox = document.getElementById("DarkModeBtn"); //get the checkbox to a variable

//if the checkbox state is changed, run a function
checkbox.addEventListener("change", function () {
    //check if the checkbox is checked or not
    if (checkbox.checked) {
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

    //TODO: invert image colors 
}

function darkModeInActive() {
    settingsMenu.classList.remove("settingsDarkMode");
    settingsMenu.classList.add("settingsLightMode");
    document.body.classList.remove("darkMode");
    document.body.classList.add("lightMode");
}