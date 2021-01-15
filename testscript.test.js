const {
  wordpicker,
  wordGuessed,
  displayIncorrectlyGuessedLetters,
  drawGallow,
  currentWord,
  guessLetter,
  gameStart,
} = require("./testscript");

test("picks word out of wordlist", () => {
  const wordList = ["badjas", "toeter", "bagage"];
  expect(wordpicker(wordList)).toBeDefined();
});

test("removes guessed letter from word", () => {
  let wordAsString = "bagage";
  let word = wordAsString.split("");
  let inputs = ["b", "a", "g", "e"];
  expect(wordGuessed(word, inputs)).toBe(true);
});

test("filters incorrectly guessed letter", () => {
  let word = ["a", "b", "c"];
  let inputs = ["x"];
  expect(displayIncorrectlyGuessedLetters(word, inputs)).toEqual(["x"]);
});

test("checks if tries corresponds to correct if statement", () => {
  let tries = 5;
  expect(drawGallow(tries)).toBe(5);
});

test("checks if current word displays correctly guessed letters in word", () => {
  let word = ["a", "b", "c"];
  let inputs = ["a", " "];
  expect(currentWord(word, inputs)).toEqual(["a", "_", "_"]);
});

// test('checks if function return when gameOver', () => {
//     let gameOver = true;
//     expect(guessLetter(gameOver)).toBe(true);
// })

// test('checks if letter has already been guessed', () => {
//     expect(guessLetter()).toBe(true)
// })

// test('checks if input is included in word', () => {
//     expect(guessLetter()).toBe(false)
// })

// test('checks if input is pushed into inputs array', () => {
//     expect(guessLetter()).toEqual(4)
// })

test("checks if max amount of tries triggers", () => {
  expect(guessLetter()).toBe(true);
});

test("checks if max amount of tries triggers", () => {
  expect(gameStart()).toEqual(["a", "j", "a", "x"]);
});
