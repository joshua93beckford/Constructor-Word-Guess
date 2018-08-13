var letter = require("./Letter.js");

function Word() {

    var letters = [];
    var wordArr = ["joshua","beckford","mom","friends","hello","world"];
    var ranIndex = Math.floor(Math.random() * wordArr.length);
    var randomWord = wordArr[ranIndex].toLowerCase();
    this.word = randomWord;
    var splitWord = this.word.split("");

    splitWord.forEach(function (let) {
         
        letters.push(new letter(let));
    });

    this.letters = letters;


    this.showLetters = function () {
        var show = "";
        this.letters.forEach(function (letter) {
            show += letter.showChar() + " ";
        });

        show = show.slice(0, -1);

        console.log(show);
    }

    this.checkGuess = function (guess) {
        var matched = 0;
        this.letters.forEach(function (letter) {
            if (letter.guessed === false && letter.checkGuess(guess) === true) {
                letter.guessed = true;
                matched++;
            }
        });

        return matched;

    }
}

module.exports = Word;