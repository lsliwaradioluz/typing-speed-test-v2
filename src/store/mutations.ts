import { Mutation } from "vuex";
import { State } from "./state";

export interface Mutations {
  [mutationName: string]: Mutation<State>;
}

export const decrementTimeleft: Mutation<State> = (state) => {
  state.timeLeft--;
};

const setGuess: Mutation<State> = (state, payload) => {
  state.guess = payload;
};

const openSaveScore: Mutation<State> = (state) => {
  state.showNameModal = !state.showNameModal;
};

const resetScore: Mutation<State> = (state) => {
  state.charsPerMinute = 0;
  state.wordsTotal = 0;
  state.correctWords = 0;
  state.timeLeft = 60;
  state.name = "";
  state.showNameModal = false;
};

const setName: Mutation<State> = (state, name) => {
  if (name) {
    state.name = name;
  }
};

const mutations: Mutations = {
  openSaveScore,
  setGuess,
  resetScore,
  setName,
  decrementTimeleft,
};

export default mutations;
