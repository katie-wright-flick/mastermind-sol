# Introduction

Your task is to complete this terminal based Mastermind game.

Mastermind is a code breaking game. The computer has a secret four letter code
that the user has to guess. The code is made up of any combination of the
letters A, B, C, D, E, F, G, H.

When the user attempts to guess the code, the computer returns a checksum
indicating the accuracy of your guess
- the checksum contains an ‘X’ for every letter than is correct, and in the
	correct position
- the checksum contains an ‘O’ for every letter that is correct, but in the
	wrong position
- the checksum contains a ‘-’ for every letter that is incorrect

Note that the checksum always displays the letters in the order X, O then -

For example,

- If the secret code is ABCD and you guess CADB, the computer will return OOOO
- If the secret code is ABCD and you guess EFGH, the computer will return ----
- If the secret code is ABCD and you guess ABEA, the computer will return XX--
- If the secret code is ABCD and you guess FBDE, the computer will return XO--
- If the secret code is ABCD and you guess DEFG, the computer will return O---
- If the secret code is ABCD and you guess DECG, the computer will return XO--

You can read more about it
[here](https://en.wikipedia.org/wiki/Mastermind_(board_game)). You can play an
online version [here](http://www.webgamesonline.com/mastermind/index.php),
which uses coloured pegs rather than letters.

## Setup

Grab a copy of the repository and install the dependencies with `npm install`

## Part 1

We’ve provided a complete GamePresenter class for the game, and a partially
complete GameEngine class.

We’ve also got a test suite in `/test` with some test that are failing.

To complete the game, you’ll need to write the ‘generate_checksum’ method, and
ensure that your solution is robust enough to cover all of the cases in the
test file.

To play the game, run `npm run game` in the root of the mastermind repository.

To run the tests, run `npm run test` in the root of the mastermind repository.

## Part 2

Now that you have functioning game, what happens if the player enters something
that doesn't look like a valid guess? This part is all about handling the edge
cases and errors you might run into.

We would like at least the following cases to be handled by your application,
along with tests that verify their behaviour:

Guesses that are the incorrect length should be rejected, allowing the player
to retry without penalty

No more than 10 valid guesses are permitted

There are no restrictions in this part - you may refactor and restructure as
much as you see fit to meet those requirements.