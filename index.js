var Word = require("./Word.js");
var inquirer = require("inquirer");
var over = false;
var lettersGuessed = new Set();
var word = new Word();
var totalGuesses = word.letters.length * 2; //10;
var lettersRemaining = word.letters.length;

function runGame() {
    
    word.showLetters();
    inquirer.prompt([
               {
            type: "input",
            name: "letter",
            message: "---Guess A Letter---"
        }
    ]).then(function (response) {
       
        guess(response.letter.toLowerCase());
        if (!over) {
            runGame();
        } else {
            restartGame();
        }
    })
}


runGame();


function guess(letter) {
    if (letter.length === 1) {
        if (!lettersGuessed.has(letter)) {
            lettersGuessed.add(letter);
        }
        else {
            console.log("Letter Has Been Guessed! Try Again!\n");
            return;
        }
        var rightGuess = word.checkGuess(letter);
        console.log(rightGuess);
        if (rightGuess > 0) {
            console.log("You Guessed Right\n");
            console.log("You Have " + totalGuesses + " Guesses Remaining!\n");
            lettersRemaining -= rightGuess;
        }
        else {
            totalGuesses--;
            console.log("You Guessed wrong!  " + totalGuesses + " Guesses Remaining!\n");
        }

        if (lettersRemaining === 0) {
            console.log("\nYou win!\n");
            word.showLetters();
            over = true;
        }

        if (totalGuesses === 0) {
            console.log("\nYou lose!\n");
            over = true;

        }

    }
    else {
        console.log("Invalid Response\n");
    }


}



function restartGame() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to:",
                choices: ["Play Again", "Exit"],
                name: "restart"
            }
        ])
        .then(function (input) {
            if (input.restart === "Play Again") {
                over = false;
                lettersGuessed = new Set();
                word = new Word();
                totalGuesses = word.letters.length + 5; 
                lettersRemaining = word.letters.length;
                runGame();
            } else {
                console.log("\nPlease Play Again\n");
                return
            }
        })
}