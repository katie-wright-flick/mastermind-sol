const introMessage = `

Welcome to Flick Mastermind 😎

Your adversary has encoded some valuable information using a secret - it's your
job to guess it!

  ????

The secret is four characters long, and consists of any of the following 8
letters:

A B C D E F G H

When you submit a guess, you get a hint back:
- If one of your letters is correct, the hint will contain a X

- If one of your letters is correct but in the wrong position, the hint will
  contain a O

- The position of the X and O in the hint does not necssarily match the position of
  the guessed letter. (i.e. for a secret "AABC", if your guess was "CADB" then
  "XO--" would be the hint)

Good luck!

------------------------
`;
module.exports = class GamePresenter {
  constructor(engine) {
    this.engine = engine;
  }

  get question() {
    return `You have ${this.engine.turnsRemaining} turns remaining\n\nWhat's your guess?\n> `;
  }

  __clearTerm() {
    // Use ANSI escape codes to clear the terminal window and move the cursor
    // to the upper left corner
    process.stdout.write('\x1B[2J\x1B[0;0H');
  }

  introduce() {
    this.__clearTerm();
    console.log(introMessage);
  }

  success() {
    console.log("Congratulations you've cracked the code!");
  }

  continue() {
    this.__clearTerm();
    console.log("Guesses so far:\n");
    console.log("|       guess     |    checksum")
    console.log("|-----------------|--------------")

    let guesses = this.engine.guesses.map(([guess, checksum], i) => {
      return `[${i + 1}]`.padEnd(8) +
             `${guess}`.padEnd(10) +
             '|' +
             `${checksum}`.padStart(10);
    });
    console.log(guesses.join("\n") + "\n");
  }
}
