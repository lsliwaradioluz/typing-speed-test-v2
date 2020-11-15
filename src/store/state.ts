import randomWords from "random-words";

export interface GuessedWord {
  value: string;
  correct: boolean;
}

export interface State {
  name: string;
  showNameModal: boolean;
  charsPerMinute: number;
  wordsTotal: number;
  correctWords: number;
  timeLeft: number;
  //
  wordsToGuess: string[];
  currentWordIndex: number;
  guess: string;
  guessedWords: GuessedWord[];
}

const wordsToGuess = randomWords(100);

const state: State = {
  name: "",
  showNameModal: false,
  charsPerMinute: 0,
  wordsTotal: 0,
  correctWords: 0,
  timeLeft: 60,
  //
  wordsToGuess,
  currentWordIndex: 0,
  guess: "",
  guessedWords: [],
};

export default state;
