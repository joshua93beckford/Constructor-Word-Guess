function Letter (letter){
    this.char = letter;
    this.guessed = false;
    this.showChar = function(){
        if(this.guessed === false)
        {
            return "_";
        }
        else{
            return this.char;
        }
    }
    this.checkGuess = function(guess){

        if(guess === this.char)
        {
            this.guessed = true;
            return true;
        }
        else{
            return false;
        }

    }
}

module.exports = Letter;