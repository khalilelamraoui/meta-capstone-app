export function navMenu() {
    var x = document.getElementById("MenuState");
    if (x.className === "navMenu-hidden") {
      x.className += " navMenu-show";
    } else {
      x.className = "navMenu-hidden";
    }
    console.log("hello");
  }