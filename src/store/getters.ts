import { Getter } from "vuex";
import { State } from "./state";

export interface Getters {
  [getterName: string]: Getter<State, any>;
}

// Getters

const currentWord: Getter<State, any> = (state) => {
  return state.wordsToGuess[state.currentWordIndex];
};

const lettersGuessed: Getter<State, any> = (state, getters) => {
  let lettersGuessed = 0;

  for (let i = 0; i <= state.guess.length - 1; i++) {
    if (state.guess[i] === getters.currentWord[i]) {
      lettersGuessed++;
    }
  }
  return lettersGuessed;
};

const remainingWords: Getter<State, any> = (state) => {
  const words = [...state.wordsToGuess];
  words.splice(0, state.currentWordIndex + 1);
  return words;
};

const accuracy: Getter<State, any> = (state) => {
  if (state.wordsTotal == 0) {
    return 0;
  } else {
    return Math.round((state.correctWords / state.wordsTotal) * 100);
  }
};

const getters: Getters = {
  accuracy,
  currentWord,
  lettersGuessed,
  remainingWords,
};

export default getters;
