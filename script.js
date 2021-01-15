// Initialize ALL global variables here
let word,
  inputs,
  tries = 0,
  gameOver;
const gallowParent = document.querySelector("#gallow_container");
const guessesRemainingTxt = document.querySelector("#guesses_remaining");
const wrongAnswerAudio = document.querySelector("#wrong_answer");
const rightAnswerAudio = document.querySelector("#right_answer");
const backgroundMusic = document.querySelector("#hallowed");
const applause = document.querySelector("#applause");
const deathbell = document.querySelector("#deathbell");

const clearInput = () => {
  document.querySelector("#letter-input").value = "";
};

const gameWon = () => {
  document.querySelector("#win").style.display = "block";
  backgroundMusic.currentTime = 427;
  setTimeout(() => {
    applause.play();
  }, 2500);
  backgroundMusic.style.display = "none";
  document.querySelector(".restart").innerHTML = "Restart";
  gameOver = true;
};

const gameLost = () => {
  document.querySelector("#lose").style.display = "block";
  backgroundMusic.currentTime = 427;
  setTimeout(() => {
    deathbell.play();
  }, 2300);
  backgroundMusic.style.display = "none";
  document.querySelector(".restart").innerHTML = "Restart";
  gameOver = true;
};

const loseDisplayWord = word => {
  document.querySelector("#chosen-word").innerHTML = `"${word.join("")}"`;
};

const updateTriesDisplay = tries => {
  let triesLeft = 6 - tries;
  if (triesLeft === 1) {
    guessesRemainingTxt.innerHTML = `You have only ${triesLeft} guess remaining!`;
  } else {
    guessesRemainingTxt.innerHTML = `You have ${triesLeft} guesses remaining.`;
  }
};
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
  // If the letter is in the word return.... false/true (we want to remove that then)
  document.querySelector(
    ".incorrectly_guessed_letters"
  ).innerHTML = incorrectlyGuessedLetters.join(" ");
};

const drawGallow = tries => {
  if (tries === 1) {
    document.querySelector("#gallow_img").src = "img/2_hangman_head.jpeg";
  } else if (tries === 2) {
    const bodyLong = document.querySelector("#body-short");
    bodyLong.classList.add("body-long");
  } else if (tries === 3) {
    const leg1 = document.querySelector("#leg1");
    leg1.classList.add("leg1-long");
  } else if (tries === 4) {
    const leg2 = document.querySelector("#leg2");
    leg2.classList.add("leg2-long");
  } else if (tries === 5) {
    const arm1 = document.querySelector("#arm1");
    arm1.classList.add("arm1-long");
  } else if (tries === 6) {
    const arm2 = document.querySelector("#arm2");
    arm2.classList.add("arm2-long");
  }
};

const clearGallow = () => {
  while (gallowParent.firstChild) {
    gallowParent.removeChild(gallowParent.firstChild);
  }
};

const buildGallow = () => {
  const emptyGallow = document.createElement("img");
  emptyGallow.id = "gallow_img";
  emptyGallow.src = "img/1_hangman_gallow.jpeg";
  gallowParent.appendChild(emptyGallow);

  const bodyLong = document.createElement("section");
  bodyLong.id = "body-short";
  bodyLong.classList.add("body-short");
  gallowParent.appendChild(bodyLong);

  const leg1 = document.createElement("section");
  leg1.id = "leg1";
  leg1.classList.add("leg1-short");
  gallowParent.appendChild(leg1);

  const leg2 = document.createElement("section");
  leg2.id = "leg2";
  leg2.classList.add("leg2-short");
  gallowParent.appendChild(leg2);

  const arm1 = document.createElement("section");
  arm1.id = "arm1";
  arm1.classList.add("arm1-short");
  gallowParent.appendChild(arm1);

  const arm2 = document.createElement("section");
  arm2.id = "arm2";
  arm2.classList.add("arm2-short");
  gallowParent.appendChild(arm2);
};

const currentWord = (word, inputs) => {
  let display = word.map(letter => {
    if (inputs.includes(letter)) {
      return letter;
    } else if (inputs.includes(letter) && letter === " ") {
      return "●";
    } else {
      return "●";
    }
  });
  if (display.includes(" ")) {
    let index = display.indexOf(" ");
    display.splice(index, 1, "_");
    // display.replaceAll(" ", "_");//ES12 feature - not working yet.
    document.querySelector(".current_word").innerHTML = display.join(" ");
  } else {
    document.querySelector(".current_word").innerHTML = display.join(" ");
  }
};

const guessLetter = () => {
  if (gameOver) {
    return;
  }
  const inputCaseSensitive = document.querySelector("#letter-input").value;
  const input = inputCaseSensitive.toLowerCase();
  clearInput();

  if (inputs.includes(input) || input === "") {
    return;
  }

  if (word.includes(input)) {
    rightAnswerAudio.play();
  }

  if (!word.includes(input)) {
    tries++;
    updateTriesDisplay(tries);
    drawGallow(tries);
    wrongAnswerAudio.play();
  }

  inputs.push(input);
  currentWord(word, inputs);
  displayIncorrectlyGuessedLetters(word, inputs);

  if (wordGuessed(word, inputs)) {
    gameWon();
  } else if (tries >= 6) {
    gameLost();
  }
};

// const getThePlayer = (player) => {
//   let play = document.getElementById("player1");
//   play = play + "We are about to start the game";
//   return play;
// }

const gameStart = player1 => {
  // getThePlayer(player1);
  gameOver = false;

  clearGallow();
  buildGallow();
  document.querySelector("#gallow_img").src = "./img/1_hangman_gallow.jpeg";
  document.querySelector("#win").style.display = "none";
  document.querySelector("#lose").style.display = "none";
  clearInput();
  updateTriesDisplay(tries);
  backgroundMusic.style.display = "block";
  backgroundMusic.currentTime = 0;
  backgroundMusic.play();

  word = wordpicker(wordList).split("");
  loseDisplayWord(word);
  word;

  tries = 0;
  guessesRemainingTxt.innerHTML = `You have ${6 - tries} guesses remaining.`;
  // drawGallow();

  inputs = [];
  currentWord(word, inputs);
  displayIncorrectlyGuessedLetters(word, inputs);
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document
    .querySelector("#letter-input")
    .addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        guessLetter();
      }
    });
  document.querySelector(".restart").addEventListener("click", gameStart);
  gameStart();
});
