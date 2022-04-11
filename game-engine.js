const TURN_LIMIT     = 10;
const BASE_CHECKSUM  = "----";
const MATCH_CHECKSUM = "XXXX";

module.exports = class GameEngine {
  constructor(secret) {
    this._playerWon = false;
    this._secret    = secret;

    // Array of [guess, checksum] tuples
    this._guesses   = [];
  }

  get finished() {
    return this._playerWon;
  }

  get guesses() {
    return this._guesses;
  }

  get turnsRemaining() {
    return TURN_LIMIT - this.guesses.length;
  }

  turn(guess) {
    let checksum = this.calculateChecksum(guess);
    this._guesses.push([guess, checksum]);

    this._playerWon = (checksum === MATCH_CHECKSUM);
  }
  
  calculateChecksum(guess) { 
   return '----';
  } 
}
