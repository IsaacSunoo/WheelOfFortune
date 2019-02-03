// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';

// Tell webpack to use these js files

import Board from './js/Board.js';
import Player from './js/Player.js';
import domUpdates from'./js/domUpdates.js';
import Game from './js/Game.js';
import Wheel from './js/Wheel.js';
import data from './js/data.js';

//  Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';
import './images/Six-Color_Standard_Wheel.png';
import './images/steering-wheel.svg'

console.log('This is the JavaScript entry file - your code begins here.');

var newGameInstance = new Game;
window.onload = () => {
  newGameInstance.initiateGame();
  newGameInstance.selectRandomPuzzle();

}




// $(".spin-btn").on("click", () => {
//   $(".wheel").css("transform", "rotate(4188deg)");
// })
