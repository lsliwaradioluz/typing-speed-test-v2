import { Mutation } from "vuex";
import { State, GuessedWord } from "./state";
import randomWords from "random-words";

interface Mutations {
  [mutationName: string]: Mutation<State>;
}

const decrementTimeLeft: Mutation<State> = (state) => {
  state.timeLeft--;
};

const setGuess: Mutation<State> = (state, payload) => {
  state.guess = payload;
};

const incrementWordsTotal: Mutation<State> = (state) => {
  state.wordsTotal++;
};

const incrementCorrectWords: Mutation<State> = (state) => {
  state.correctWords++;
};

const incrementCharsPerMinute: Mutation<State> = (state, payload: number) => {
  state.charsPerMinute += payload;
};

const incrementCurrentWordIndex: Mutation<State> = (state) => {
  state.currentWordIndex++;
};

const addNewGuessedWord: Mutation<State> = (state, word: GuessedWord) => {
  state.guessedWords.push(word)
}

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
  state.wordsToGuess = randomWords(100);
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
  decrementTimeLeft,
  incrementWordsTotal,
  incrementCorrectWords,
  incrementCharsPerMinute,
  incrementCurrentWordIndex,
  addNewGuessedWord,
};

export default mutations;
