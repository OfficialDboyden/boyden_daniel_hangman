// JavaScript Document
(() => {
  // Variables always go at the top of this file
  console.log('hangman script loaded');
  var words =["party", "javascript", "danieliscool", "vampire", "pancake", "hockey"];

  let currentWord =
  words[Math.floor(Math.random()*words.length)],
    wordHint = document.querySelector(`.current-word`),
    guessBox = document.querySelector(`.letter-guess`);

    wordHint.textContent = currentWord.split("").map(letter => letter =
    "_").join(" ");

  //functions go in the middle (logic,etc.)
  function makeGuess() {
    //debugger;
    console.log(this.value);
  }

  // event handling goes at the bottom
  guessBox.addEventListener(`keyup`, makeGuess);

  // when we start the game or restart it do these things

// storing the random word in a variable

// when we start the game or REstart it do these things
  function init() {
// generate a random number and grab the word that corresponds to it in the word array

    var random = Math.random();


  }
  init();
  })();
