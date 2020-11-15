import mutations from "@/store/mutations";

describe("Vuex mutation", () => {
  let state: any;
  beforeEach(() => {
    state = {
      timeLeft: 60,
      guess: "",
      wordsTotal: 0,
      correctWords: 0,
      charsPerMinute: 0,
      currentWordIndex: 0,
      guessedWords: [],
    };
  });
  it("decrementTimeLeft", () => {
    mutations.decrementTimeLeft(state);
    expect(state.timeLeft).toBe(59);
  });

  it("setGuess", () => {
    const newGuess = "Beard";
    mutations.setGuess(state, newGuess);
    expect(state.guess).toBe(newGuess);
  });

  it("incrementWordsTotal", () => {
    mutations.incrementWordsTotal(state);
    expect(state.wordsTotal).toBe(1);
  });

  it("incrementCorrectWords", () => {
    mutations.incrementCorrectWords(state);
    expect(state.correctWords).toBe(1);
  });

  it("incrementCharsPerMinute", () => {
    mutations.incrementCharsPerMinute(state, 7);
    expect(state.charsPerMinute).toBe(7);
  });

  it("incrementCurrentWordIndex", () => {
    mutations.incrementCurrentWordIndex(state);
    expect(state.currentWordIndex).toBe(1);
  });

  it("addNewGuessedWord", () => {
    const newGuessedWord = "Lion";
    mutations.addNewGuessedWord(state, newGuessedWord);
    expect(state.guessedWords).toEqual([newGuessedWord]);
  });
});
