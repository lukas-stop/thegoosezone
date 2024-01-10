// allow the user to type in the div
// upon enter, read the typed text
// run a "command" depending on the text typed
// display output to user in the form of ascii designs (for now)

/* -----------------------------------------
AVAILABLE COMMANDS
________________

art - displays art experience (fake webpage)
    (headings are arguments)
work - displays programming experience (fake webpage)
    (headings are arguments)
contact - displays my contact info
    contact -email - opens up user's email to send me a message
    contact -github - opens up my github profile
honk - displays an ascii goose
    honk -loud - plays a honk sound with another ascii goose
close - close the tab
exit - close the tab
self destruct - minecraft creeper sound then close browser
explode - minecraft creeper sound then close browser

----------------------------------------- */

var blinkingUnderscoreJS = setInterval(function () {
    var ele = document.getElementById('blinkingUnderscore');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, 1000);

//if input textbox != empty, remove blinking underscore

//if (press enter in thing) -> do thing
//https://stackoverflow.com/questions/3149362/how-do-i-capture-a-key-press-or-keydown-event-on-a-div-element





// let userInput = "";

// switch (userInput.toLowerCase()) {
//     case "art":
//         console.log("user typed art");
//         break;
//     case "work":
//         console.log("user typed work");
//         break;
//     case "contact":
//         console.log("user typed contact");
//         break;
//     default:
//         console.log("didn't get user input");
//         break;
// }