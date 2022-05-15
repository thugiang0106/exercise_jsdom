// keydown: Keydown happens when the key is pressed down, and auto repeats if the key is pressed down for long.
// keypress: This event is fired when an alphabetic, numeric, or punctuation key is pressed down.
// keyup: Keyup happens when the key is released.

//target p element
const p = document.querySelector("#heart");
//assign ❤️ as HTML content of p
p.innerHTML = "❤️";

//when up arrow is pressed, the heart grows in size by 10%
//use window.addEventListener

//parseInt(value, radix): convert it into integer
//radix: specify which numeral system to be used. default radix is 10

window.addEventListener("keydown", function heartSizing(event) {
  switch (event.key) {
    case "ArrowUp":
      p.style.fontSize = parseInt(p.style.fontSize, 10) + 1.5 + "px";
      console.log(p.style.fontSize);
      break;
    case "ArrowDown":
      p.style.fontSize = parseInt(p.style.fontSize, 10) - 1.5 + "px";
      break;
  }

  //when p = 100.5 px => p = 💔
  if (p.style.fontSize === "100.5px") {
    p.innerHTML = " 💔";
    //refer to parent function => window.addEventListener
    //remove Event listener when p = 💔 && o = 100.5px
    this.removeEventListener("keydown", heartSizing);
  }
});

//Prevent default window scroll
var handleScroll = function () {
  //scrollTo : Scrolls to a particular set of coordinates in the document.
  window.scrollTo(0, 0); //-> required when scroll bar is dragged
}

window.addEventListener("scroll", handleScroll, false);

var handleEvent = function (e) {
  e.preventDefault(); // disables scrolling by mouse wheel and touch move
};

window.addEventListener("scroll", handleEvent, false);
window.addEventListener("mousewheel", handleEvent, false);
window.addEventListener("touchmove", handleEvent, false);