const btn = document.getElementById("toggle");
const label = document.getElementById("label");

var theStyle = document.querySelector(":root");

btn.onclick =()=> {
    var currentStyle = getComputedStyle(theStyle).getPropertyValue("--page-check");
    
    if (currentStyle == "first") {
        theStyle.style.setProperty("--page-check", "second");
        theStyle.style.setProperty("--status", "hidden");
        theStyle.style.setProperty("--rainbow", "white");
        btn.innerHTML = 'Click me again';
        label.innerHTML = "Greeting";
    } 
    else if (currentStyle == "second") {
        theStyle.style.setProperty("--page-check", "third");
        btn.innerHTML = 'Click me once again';
        label.innerHTML = "Message #1";
    } 
    else if (currentStyle == "third") {
        theStyle.style.setProperty("--page-check", "forth");
        btn.innerHTML = 'Click';
        label.innerHTML = "Message #2";
    } 
    else if (currentStyle == "forth") {
        theStyle.style.setProperty("--page-check", "fifth");
        label.innerHTML = "Message #3";
    }  
    else if (currentStyle == "fifth") {
        theStyle.style.setProperty("--page-check", "final");
        label.innerHTML = "Message #4";
    }
    else if (currentStyle == "final") {
        theStyle.style.setProperty("--page-check", "last");
        theStyle.style.setProperty("--status", "show");
        theStyle.style.setProperty("--rainbow", "linear-gradient(90deg,#38bdf8,#a78bfa,#facc15,#38bdf8)")
        label.innerHTML = "Celebratory Message";
    }  
    else if (currentStyle == "last") {
        theStyle.style.setProperty("--page-check", "first");
        theStyle.style.setProperty("--rainbow", "white");
        btn.innerHTML = 'Restart?';
        label.innerHTML = "Go back to the beginning?";
    }
}