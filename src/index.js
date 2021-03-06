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
import './images/Fortnite-bkgrd.jpg';

import './css/base.css';
import $ from 'jquery';

let game;
$('.create-player').on('click', e => {
  e.preventDefault();
  let players = [
    new Player($('.player-field-1').val()),
    new Player($('.player-field-2').val()),
    new Player($('.player-field-3').val())
  ];
  game = new Game(players);
  domUpdates.hideStartPage();
  game.initiateGame();
  domUpdates.displayPlayerNames(players);
});

$('.const-guess-btn').on('click', e => {
  domUpdates.displayBuyConsonant();
});

$('.spin-btn').on('click', e => {
  setTimeout(() => domUpdates.displayBuyConsonant(), 6000);
});

$('.vowel-buy-btn').on('click', e => {
  domUpdates.displayBuyVowel();
});

$('.choose-letter').on('click', e => {
  game.checkLetterGuess($(event.target).text());
  domUpdates.hideUsedLetter($(event.target).text());
  domUpdates.hideConsonantBoard();
})

$('.choose-vowel-letter').on('click', e => {
  game.checkVowelGuess($(event.target).text());
  domUpdates.hideUsedLetter($(event.target).text());
  domUpdates.hideVowelBoard();
})

$('.spin-btn').on('click', e => {
  console.log(game)
  game.roundWheel.spinWheel();
  console.log(game.roundWheel.currentSpin);
});

$('.guess-input').on('blur', e => {
  console.log('guess input exited');
  game.checkPlayerGuess($('.guess-input').val());
});

$('.play-again').on('click', e => {
  window.location.reload();
});








