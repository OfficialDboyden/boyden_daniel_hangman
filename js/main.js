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
  correctGuesses = 0,
  resetScreen = document.querySelector('.reset-screen'),
  resetButton = resetScreen.querySelector ('.reset-button'),
  wrongLetters = document.querySelector('.wrong-letters'),
  wrongLetterArray = [],
  correctLetterArray = [];


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

function showResetScreen(message, source)
{
  resetScreen.classList.add('showBodyPart');
  //grab header tag and change the content
  resetScreen.querySelector('h3').textContent = message;
  resetScreen.querySelector('img').src = source;
}

function resetGame()
{
  wrongGuesses = 0;
  correctGuesses = 0;
  wrongLetterArray = [];
  wrongLetters.textContent = "";
  let gamePieces = Array.from(document.querySelectorAll('.showBodyPart'));
  gamePieces.forEach(piece => piece.classList.remove('showBodyPart'));
  resetScreen.classList.add('reset-screen');
  init();
}

//functions go in the middle (logic)
function makeGuess()
{
    console.log(this.value);

    //if no letter
    if (this.value == "" || this.value.length < 1)
    {
     return;
    }
    let currentGuess = this.value;

    //if the current guess is ==
    if (wrongLetterArray.indexOf(this.value) >= 0)
    {
      window.alert("The letter was already guessed, it was wrong.");
      document.getElementById('myLetter').value = "";
      return;
    }

    if (correctLetterArray.indexOf(this.value) >= 0)
    {
      window.alert("The letter was already guessed, it was right.");
      document.getElementById('myLetter').value = "";
      return;
    }



    //conditional statement
    //inside the round brackets, check for condition
    //'index of' means find the position of where the character is inside of the string, if its not there the output is -1 which is why it has to be above 0 to be a right answer
    if (currentWord.indexOf(this.value) < 0) //the losing path
    {
      wrongLetterArray.push(this.value);
      wrongLetters.textContent = wrongLetterArray.join(" ");


    document.querySelector(`.wrong${wrongGuesses}`).classList.add('showBodyPart');
    document.getElementById('myLetter').value = "";

        if (wrongGuesses >= 5)
        {
          console.log('you lose, loser');
          showResetScreen("You lose, Loser! Play again?","images/losing.jpg");
        }
        else
        {
        document.querySelector(`.wrong${wrongGuesses}`).classList.add('showBodyPart');
        }

    wrongGuesses++; //adds one to whatever that value was already
    }
    else // checking for the win path
    {
      correctLetterArray.push(this.value);

      //split the current word into an array and check letter by letter
      var matchAgainst = currentWord.split('');
      var hintString = wordHint.textContent.split(' '); // split on the characters, not the underscores
      //check each letter in the current word
      matchAgainst.forEach((letter,index) => {
        if (letter == currentGuess)
        {
          hintString[index] = currentGuess;

          correctGuesses++

        }
      });

      document.getElementById('myLetter').value = "";
      wordHint.textContent = "";
      wordHint.textContent = hintString.join(" ");

      if (correctGuesses == currentWord.length) {
        showResetScreen("You won! Play again?","images/winning.jpg");
      }

    }
}





//event handling goes at the bottom
//goes to guess box, listens for event keyup(what are you listening for) makeGuess (what do you want top happen)
guessBox.addEventListener('keyup', makeGuess);
resetButton.addEventListener("click", resetGame, true);


init();
})();
