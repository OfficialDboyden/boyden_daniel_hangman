(()=> {
  // variables always go at the top of the file
console.log('hangman script loaded!');

const words = ["party", "apple", "monster", "random", "life"];
//storig the random words from array in a single variable
// math floor rounds the number, math random gets the number, words.length is the amount of items in the array (words)
let currentWord = null,
  wordHint = document.querySelector('.current-word'),
  guessBox = document.querySelector('.letter-guess'),
  wrongGuesses = 0,
  resetScreen = document.querySelector('.reset-screen'),
  resetButton = resetScreen.querySelector('button'),
  wrongLetters = document.querySelector('.wrong-letters'),
  wrongLetterArray = [];


function showResetScreen()
{
resetScreen.classList.add('showBodyPart');
}

function resetGame() {
  wrongGuesses = 0;
  let gamePieces = array.From(document.querySelectorAll('showBodyPart'));
  gamePieces.forEach(piece => piece.classList.remove('showBodyPart'));
  init();
}

function makeGuess() {
 console.log(this.value)

//if no letter
  if (this.value == "" || this.value.length < 1) {
    return;
  }
  if (currentWord.indexOf(this.value) < 0) {
    wrongLetterArray.push(this.value);
    wrongLetters.textContent = wrongLetterArray.join(" ");

    document.querySelector(`.wrong${wrongGuesses}`).classList.add('showBodyPart');

    if (wrongGuesses >= 5)
    {
      console.log('you lose, loser');
    }
    else
    {
      document.querySelector(`.wrong${wrongGuesses}`).classList.add('showBodyPart');
    }

    wrongGuesses++; //adds one to whatever that value was already
  }

  else {
    // checking for the win path
  }
}

//conditional statement
//inside the round brackets, check for condition
//'index of' means find the position of where the character is inside of the string, if its not there the output is -1 which is why it has to be above 0 to be a right answer


guessBox.addEventListener('keyup', makeGuess);

//when game starts or REstarts, o these things
function init()
{
  // generate a random number and grab the word that corrisponds with the word in the array
  var random = Math.random();

  currentWord = words[Math.floor(Math.random()*words.length)];

  // go to var wordhint get the string (text content) make it the currentWord but change it into underscores
  // .split cuts the string into characters .map take the tetters turn them into letters that are underscores, .join them together agin using " " (spaces)
  wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");

  console.log(`guess this word: ${currentWord}. Its at ${words.indexOf(currentWord)}`);

}


init();
})();
