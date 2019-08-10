let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

/* Create a generateTarget() function. This function will be called at the start of 
each new round in order to generate the new secret target number. This function should 
return a random integer between 0 and 9.
*/
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

/* Create a compareGuesses() function. This function will be called each round to determine 
which guess is closest to the target number. This function:

1. Has three parameters representing the user (human) guess, a computer guess, and the secret 
target number to be guessed.

2. Determines which player (human or computer) wins based on which guess is closest to the target. 
If both players are tied, the human user should win.

3. Return true if the human player wins, and false if the computer player wins.*/

const compareGuesses = (humanGuess, computerGuess, secretTargetNumber) => {

    let humanDifference = difference(humanGuess, secretTargetNumber);
    let computerDifference = difference(computerGuess, secretTargetNumber);

    if (humanDifference === computerDifference || computerDifference > humanDifference) {
        return true;
    } else if (humanDifference > computerDifference) {
        return false;
    }
}

/* Create an updateScore() function. This function will be used to correctly increase the winner’s 
score after each round. This function:

1. Has a single parameter. 
2. This parameter will be a string value representing the winner.
3. Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in 
to updateScore. The string passed in will be either 'human' or 'computer'.
4. Does not need to return any value.*/

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

/*Create an advanceRound() function. This function will be used to update the round number after 
each round.

1. advanceRound() should increase the value of currentRoundNumber by 1.

After completing advanceRound(), your Number Guesser game should be fully operational. You should be able 
to make guesses, see your or the computer score increase correctly, move to the next round, and see the 
correct round displayed.*/

const advanceRound = () => {
    currentRoundNumber++;
}

// Helper Functions
function difference(a, b) {
    return Math.abs(a - b);
  }
  