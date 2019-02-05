// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';

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

$('.create-player').on('click', (e) => {
  e.preventDefault();
  let game = new Game;
  game.initiateGame();
  let players = [
    new Player($('.player-1-box').val()),
    new Player($('.player-2-box').val()),
    new Player($('.player-3-box').val())
  ];
  console.log(players);
});




