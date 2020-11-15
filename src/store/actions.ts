import { Action } from "vuex";
import { State, GuessedWord } from "./state";

const updateTestScore: Action<State, State> = ({ state, getters, commit }) => {
  const guessedWord: GuessedWord = {
    value: state.guess,
    correct: false,
  };
  commit("incrementWordsTotal");

  if (state.guess === getters.currentWord) {
    commit("incrementCorrectWords");
    commit("incrementCharsPerMinute", state.guess.length);
    guessedWord.correct = true;
  }

  commit("addNewGuessedWord", guessedWord);
  commit("setGuess", "");
  commit("incrementCurrentWordIndex");
};

export default {
  updateTestScore,
};
