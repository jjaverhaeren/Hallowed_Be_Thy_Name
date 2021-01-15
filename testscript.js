// Initialize ALL global variables here
let word;
let inputs;
let tries = 0;
let gameOver;
let gallowParent = document.querySelector("#gallow_container");
// const wrongAnswerAudio = document.querySelector('#wrong_answer');
// const rightAnswerAudio = document.querySelector('#right_answer');
// const backgroundMusic = document.querySelector('#hallowed');
// const applause = document.querySelector('#applause');
// const deathbell = document.querySelector('#deathbell');

// This code here selects a random word
const wordList = [
  "iron maiden",
  "metallica",
  "death angel",
  "morbid angel",
  "death",
  "slayer",
  "testament",
  "flotsam and jetsam",
  "cynic",
  "obituary",
  "sadus",
  "atheist",
];

//
// const clearInput = () => {
//   document.querySelector("#letter-input").value = "";
// };

// const gameWon = () => {
//   document.querySelector("#win").style.display = "block";
//   backgroundMusic.currentTime = 427;
//   setTimeout(() => {applause.play()}, 2500);
//   gameOver = true;
// };

// const gameLost = () => {
//   document.querySelector("#lose").style.display = "block";
//   backgroundMusic.currentTime = 427;
//   setTimeout(() => {deathbell.play()}, 2300);
//   gameOver = true;
// };

// const loseDisplayWord = (word) => {
//   document.querySelector("#chosen-word").innerHTML = `"${word.join("")}"`;
// };

// const updateTriesDisplay = (tries) => {
//   document.querySelector(".lives span").innerHTML = 6 - tries;
// };

//
const wordpicker = list => {
  let index = Math.floor(Math.random() * list.length);
  const wordAsString = list[index];
  return wordAsString;
};

const wordGuessed = (word, inputs) => {
  // remove all letters that are already guessed from word
  let remaining = word.filter(letter => {
    // If the letter is guessed return true (we want to remove that right away)
    return !inputs.includes(letter);
  });
  // If we have letters left
  return remaining.length === 0;
};

const displayIncorrectlyGuessedLetters = (word, inputs) => {
  let incorrectlyGuessedLetters = inputs.filter(
    letter => !word.includes(letter)
  );
  return incorrectlyGuessedLetters;
  // If the letter is in the word return.... false/true (we want to remove that then)
  // document.querySelector(".incorrectly_guessed_letters").innerHTML = incorrectlyGuessedLetters.join(" ");
};

const drawGallow = tries => {
  if (tries === 1) {
    return 1;
    // document.querySelector("#gallow_img").src = "img/2_hangman_head.jpeg";
  } else if (tries === 2) {
    return 2;
    const bodyLong = document.querySelector("#body-short");
    bodyLong.classList.add("body-long");
  } else if (tries === 3) {
    return 3;
    const leg1 = document.querySelector("#leg1");
    leg1.classList.add("leg1-long");
  } else if (tries === 4) {
    return 4;
    const leg2 = document.querySelector("#leg2");
    leg2.classList.add("leg2-long");
  } else if (tries === 5) {
    return 5;
    const arm1 = document.querySelector("#arm1");
    arm1.classList.add("arm1-long");
  } else if (tries === 6) {
    return 6;
    const arm2 = document.querySelector("#arm2");
    arm2.classList.add("arm2-long");
  }
};

// const clearGallow = () => {
//     while(gallowParent.firstChild) {
//       gallowParent.removeChild(gallowParent.firstChild);
//     }
// };

// const buildGallow = () => {

//       const emptyGallow = document.createElement('img');
//       emptyGallow.id = 'gallow_img';
//       emptyGallow.src = 'img/1_hangman_gallow.jpeg';
//       gallowParent.appendChild(emptyGallow);

//       const bodyLong = document.createElement('section')
//       bodyLong.id = 'body-short';
//       bodyLong.classList.add('body-short');
//       gallowParent.appendChild(bodyLong);

//       const leg1 = document.createElement('section')
//       leg1.id = 'leg1';
//       leg1.classList.add('leg1-short');
//       gallowParent.appendChild(leg1);

//       const leg2 = document.createElement('section')
//       leg2.id = 'leg2';
//       leg2.classList.add('leg2-short');
//       gallowParent.appendChild(leg2);

//       const arm1 = document.createElement('section')
//       arm1.id = 'arm1';
//       arm1.classList.add('arm1-short');
//       gallowParent.appendChild(arm1);

//       const arm2 = document.createElement('section')
//       arm2.id = 'arm2';
//       arm2.classList.add('arm2-short');
//       gallowParent.appendChild(arm2);
// }

const currentWord = (word, inputs) => {
  let display = word.map(letter => {
    if (inputs.includes(letter)) {
      return letter;
    } else if (inputs.includes(letter) && letter === " ") {
      return "_";
    } else {
      return "_";
    }
  });
  return display;
};

// start guesLetter
const guessLetter = () => {
  // if (gameOver) {
  //   return true;
  // }
  // // // const input = document.querySelector("#letter-input").value;
  // // clearInput();
  // let inputs = ['a', 'b', 'c'];
  // let input = 'a';

  //  return inputs.includes(input);
  // let word = ['a', 'b', 'c'];
  // let input = 'a';

  //   return !word.includes(input)

  // let inputs = ['a', 'b', 'c'];
  // let input = 'd';

  //  return inputs.push(input);
  // // currentWord(word, inputs);
  // // displayIncorrectlyGuessedLetters(word, inputs);
  let tries = 6;

  if (tries >= 6) {
    return true;
  }
};
// end guesLetter

const gameStart = () => {
  // gameOver = false;

  // clearGallow();
  // buildGallow();
  // document.querySelector("#gallow_img").src = './img/1_hangman_gallow.jpeg';
  // document.querySelector("#win").style.display = "none";
  // document.querySelector("#lose").style.display = "none";
  // clearInput();
  // updateTriesDisplay(tries);
  // backgroundMusic.play();
  let wordList = ["ajax"];

  word = wordpicker(wordList).split("");
  return word;
  // loseDisplayWord(word);
  // word;

  // tries = 0;
  // document.querySelector(".lives span").innerHTML = 6 - 0;
  // // drawGallow();

  // inputs = [];
  // currentWord(word, inputs);
  // displayIncorrectlyGuessedLetters(word, inputs);
};

// document.addEventListener("DOMContentLoaded", () => {

//   document.querySelector(".guess").addEventListener("click", guessLetter);
//   document.querySelector("#letter-input" ).addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//       guessLetter();
//     }
// });
//   document.querySelector(".restart").addEventListener("click", gameStart);
//   gameStart();
// });

module.exports = {
  wordpicker,
  wordGuessed,
  displayIncorrectlyGuessedLetters,
  drawGallow,
  currentWord,
  guessLetter,
  gameStart,
};
