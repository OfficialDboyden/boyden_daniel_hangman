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
  resetButton = resetScreen.querySelector('button');

function showResetScreen()
{
resetScreen.classList.add('showBodyPart');
}

function resetGame() {
  wrongGuesses = 0;
  let namePieces = Array.From(document.querySelectorAll('showBodyPart'));
  gamePieces.forEach(piece => piece.classList.remove('show-piece'));

  init();
}

function makeGuess(){
 console.log(this.value);

//if no letter
if (this.value == "" || this.value.length < 1) {
  return;
}
}

//conditional statement
//inside the round brackets, check for condition
//'index of' means find the position of where the character is inside of the string, if its not there the output is -1 which is why it has to be above 0 to be a right answer
if (currentWord.indexOf(this.value) < 0)
{
  document.querySelector(`.wrong${wrongGuesses}`).classList.add('showBodyPart');
  if (wrongGuesses >= 5)
  {
    console.log('you lose, loser');
  }
  else
  {

  }

  wrongGuesses++; //adds one to whatever that value was already
}

else {

}

//when game starts or REstarts, o these things
function init() {
  // generate a random number and grab the word that corrisponds with the word in the array
debugger;
  currentWord = words[Math.floor(Math.random()*words.length)];

  // go to var wordhint get the string (text content) make it the currentWord but change it into underscores
  // .split cuts the string into characters .map take the tetters turn them into letters that are underscores, .join them together agin using " " (spaces)
  wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");

  console.log(`guess this word: ${currentWord}. Its at ${words.indexOf(currentWord)}`);

}

guessBox.addEventListener('')


init();
})();
