import { Action } from "vuex";
import { State } from "./state";

const updateTestScore: Action<State, State> = ({ state, getters, commit }) => {
  commit("incrementWordsTotal");

  if (state.guess === getters.currentWord) {
    commit("incrementCorrectWords");
    commit("incrementCharsPerMinute", state.guess.length);
  }

  commit("setGuess", "");
  commit("incrementCurrentWordIndex");
};

export default {
  updateTestScore,
};
