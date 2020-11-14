import { State } from "./state";

const accuracy = (state: State): number => {
  if (state.wordsTotal == 0) {
    return 0;
  } else {
    return Math.round((state.correctWords / state.wordsTotal) * 100);
  }
};

export default {
  accuracy,
};
