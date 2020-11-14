import { State } from "./state";

const openSaveScore = (state: State) => {
  state.showNameModal = !state.showNameModal;
};

const resetScore = (state: State) => {
  state.charsPerMinute = 0;
  state.wordsTotal = 0;
  state.correctWords = 0;
  state.timeLeft = 60;
  state.name = "";
  state.showNameModal = false;
};

const setName = (state: State, name: string) => {
  state.name = name;
};

export default {
  openSaveScore,
  resetScore,
  setName,
};
