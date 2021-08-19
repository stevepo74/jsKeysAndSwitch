// KEYS
// ArrowLeft was not made up
// Switch
const circle = document.querySelector(".circle");

//function for listening out to the entire document for left arrow key being pressed
function control(event) {
  // if (event.key === "ArrowLeft") {
  //   console.log("pressed left");
  // } else if (event.key === "ArrowRight") {
  //   console.log("pressed right");
  // } else if (event.key === "ArrowUp") {
  //   console.log("pressed up");
  // } else if (event.key === "ArrowDown") {
  //   console.log("pressed down");
  // }

  switch (event.key) {
    case "ArrowLeft":
      console.log("pressed left");
      break;
    case "ArrowRight":
      console.log("pressed right");
      break;
    case "ArrowUp":
      console.log("pressed up");
      break;
    case "ArrowDown":
      console.log("pressed down");
      break;
    default:
      console.log("key not recognized");
  }
}

document.addEventListener("keydown", control);
