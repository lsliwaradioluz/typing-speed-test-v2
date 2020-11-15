import WordsInput from "@/components/atoms/TestZoneWordsInput.vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex, { ActionTree, MutationTree } from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

interface State {
  timeLeft: number;
  guess: string;
}

const setup = (
  state: State,
  mutations: MutationTree<State>,
  actions: ActionTree<State, State>
) => {
  const store = new Vuex.Store({
    state,
    mutations,
    actions,
  });

  return mount(WordsInput, { store, localVue });
};

describe("TestZoneWordsInput", () => {
  let state: State;
  let mutations: MutationTree<State>;
  let actions: ActionTree<State, State>;

  beforeEach(() => {
    state = { timeLeft: 60, guess: "" };
    mutations = {
      decrementTimeleft: jest.fn(),
      setGuess: jest.fn(),
    };
    actions = {
      updateTestScore: jest.fn(),
    };
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllTimers();
  });

  it("renders without errors", () => {
    const wrapper = setup(state, mutations, actions);
    expect(wrapper.exists()).toBe(true);
  });

  it("commits 'setGuess' mutation on input", async () => {
    const wrapper = setup(state, mutations, actions);
    await wrapper.trigger("input");
    expect(mutations.setGuess).toHaveBeenCalledTimes(1);
  });

  it("triggers the clock only once at first letter typed", async () => {
    const wrapper = setup(state, mutations, actions);
    await wrapper.trigger("input");
    await wrapper.trigger("input");
    jest.advanceTimersByTime(60000);
    expect(mutations.decrementTimeleft).toHaveBeenCalledTimes(60);
  });

  it("does not dispatch 'updateTestScore' action on space/enter click when input empty", async () => {
    const wrapper = setup(state, mutations, actions);
    await wrapper.trigger("keydown", { keyCode: "Space" });
    await wrapper.trigger("keydown", { keyCode: "Enter" });
    expect(actions.updateTestScore).toHaveBeenCalledTimes(0);
  });

  it("dispatches 'updateTestScore' action on space/enter click when input has value", async () => {
    state.guess = "Guess";
    const wrapper = setup(state, mutations, actions);
    await wrapper.trigger("keydown", { keyCode: "Space" });
    await wrapper.trigger("keydown", { keyCode: "Enter" });
    expect(actions.updateTestScore).toHaveBeenCalledTimes(2);
  });

  it("should stop decrementing time after 60 seconds", async () => {
    const wrapper = setup(state, mutations, actions);
    await wrapper.trigger("input");
    jest.advanceTimersByTime(60000);
    state.timeLeft = 0;
    jest.advanceTimersByTime(3000);
    expect(mutations.decrementTimeleft).toHaveBeenCalledTimes(60);
  });

  it("should not be editable when timeLeft reaches 0", () => {
    state.timeLeft = 0;
    const wrapper = setup(state, mutations, actions);
    expect(wrapper.attributes().contenteditable).toBe("false");
  });
});
