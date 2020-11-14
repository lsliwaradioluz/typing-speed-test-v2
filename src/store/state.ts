export interface State {
  name: string;
  showNameModal: boolean;
  charsPerMinute: number;
  wordsTotal: number;
  correctWords: number;
  timeLeft: number;
}

const state: State = {
  name: "",
  showNameModal: false,
  charsPerMinute: 0,
  wordsTotal: 0,
  correctWords: 0,
  timeLeft: 60,
};

export default state;
