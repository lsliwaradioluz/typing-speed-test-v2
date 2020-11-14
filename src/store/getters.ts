import { Getter } from "vuex";
import { State } from "./state";

export interface Getters {
  [getterName: string]: Getter<State, any>;
}

const currentWord: Getter<State, any> = (state) => {
  return state.wordsToGuess[state.currentWordIndex];
};

const remainingWords: Getter<State, any> = (state) => {
  state.wordsToGuess.splice(0, 1);
  return state.wordsToGuess;
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
  remainingWords,
};

export default getters;
