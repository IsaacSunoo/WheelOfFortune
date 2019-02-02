// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';

// Tell webpack to use these js files
import './js/Board.js';
import './js/Player.js';
import './js/domUpdates';
import './js/Game.js';
import './js/Wheel.js';



//  Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';
import './images/Six-Color_Standard_Wheel.png';
import './images/steering-wheel.svg'






console.log('This is the JavaScript entry file - your code begins here.');

$(".spin-btn").on("click", (e) => {
  e.preventDefault()
  console.log("hello world")
  $(".wheel").css("transform", "rotate(4188deg)");
})
