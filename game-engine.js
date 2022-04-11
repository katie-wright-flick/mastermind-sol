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
    let hint = guess.split("").map((g, idx) => {
      if (g === this._secret[idx]) return 'X';
      if (this._secret.includes(g)) {
        const guessArray = guess.split("");
        const lettersInGuessToCurrentIndex = guessArray.slice(0, idx + 1);
        const instancesofCurrentLetter = lettersInGuessToCurrentIndex.filter(letter => letter === g)
        const firstOccuranceOfCurrentLetterInGuess = instancesofCurrentLetter.length === 1;
        if(firstOccuranceOfCurrentLetterInGuess) return "O";
      } 
      return '-'
    })
    return hint.sort().reverse().join('');
  } 
}
