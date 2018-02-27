const readline = require('readline-sync');

const GamePresenter = require('./game-presenter');
const GameEngine    = require('./game-engine');

const secret    = "DBAC";
const game      = new GameEngine(secret);
const presenter = new GamePresenter(game);

presenter.introduce();

while (!game.finished) {
  let guess = readline.question(presenter.question);
  game.turn(guess);
  presenter.continue();
}

presenter.success();
