import WordsInput from "@/components/atoms/TestZoneWordsInput.vue";
import { mount, Wrapper, createLocalVue } from "@vue/test-utils";
import Vuex, { Store } from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TestZoneWordsInput", () => {
  let wrapper: Wrapper<Vue>;
  let store: Store<any>;
  const state = { timeLeft: 60, guess: "" };
  const mutations = {
    decrementTimeleft: jest.fn(),
    setGuess: jest.fn(),
  };
  const actions = {
    updateTestScore: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllTimers();
    jest.useFakeTimers();
    store = new Vuex.Store({ state, mutations, actions });
    wrapper = mount(WordsInput, { store, localVue });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("commits 'setGuess' mutation on input", async () => {
    await wrapper.trigger("input");
    expect(mutations.setGuess).toHaveBeenCalledTimes(1);
  });

  it("triggers the clock only once at first letter typed", async () => {
    await wrapper.trigger("input");
    await wrapper.trigger("input");
    jest.advanceTimersByTime(60000);
    expect(mutations.decrementTimeleft).toHaveBeenCalledTimes(60);
  });

  it("does not dispatch 'updateTestScore' action on space/enter click when input empty", async () => {
    await wrapper.trigger("keydown", { keyCode: "Space" });
    await wrapper.trigger("keydown", { keyCode: "Enter" });
    expect(actions.updateTestScore).toHaveBeenCalledTimes(0);
  });

  it("dispatches 'updateTestScore' action on space/enter click when input has value", async () => {
    state.guess = "Guess";
    await wrapper.trigger("keydown", {
      keyCode: "Space",
    });
    await wrapper.trigger("keydown", { keyCode: "Enter" });
    expect(actions.updateTestScore).toHaveBeenCalledTimes(2);
  });

  it("should stop decrementing time after 60 seconds", async () => {
    await wrapper.trigger("input");
    jest.advanceTimersByTime(60000);
    state.timeLeft = 0;
    jest.advanceTimersByTime(3000);
    expect(mutations.decrementTimeleft).toHaveBeenCalledTimes(60);
  });

  it("should not be editable once timeLeft reaches 0", () => {
    expect(wrapper.attributes().contenteditable).toBe("false");
  });
});
