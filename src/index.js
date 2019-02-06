// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file


// Tell webpack to use these js files

import Player from './js/Player.js';
import domUpdates from'./js/domUpdates.js';
import Game from './js/Game.js';
import Wheel from './js/Wheel.js';
import data from './js/data.js';
import Board from './js/Board.js';

//  Tell webpack to use an image (link to it in index.html)
import './images/down.png';
import './images/Six-Color_Standard_Wheel.png';
import './css/base.css';



$('.create-player').on('click', (e) => {
  e.preventDefault();
  $('.start-page').css("visibility","hidden");
  let game = new Game;
  let domUpdatesInstance = new domUpdates();
  game.initiateGame();
  let players = [
    new Player($('.player-field-1').val()),
    new Player($('.player-field-2').val()),
    new Player($('.player-field-3').val())
  ];
  domUpdatesInstance.displayPlayerNames(players);
  console.log(players);
});






