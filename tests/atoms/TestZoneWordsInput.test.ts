import WordsInput from "@/components/atoms/TestZoneWordsInput.vue";
import { mount, Wrapper, createLocalVue } from "@vue/test-utils";
import Vuex, { Store } from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TestZoneWordsInput", () => {
  let wrapper: Wrapper<Vue>;
  let store: Store<any>;
  const state = { timeLeft: 60 };
  const mutations = {
    decrementTimeleft: jest.fn(),
    setGuess: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllTimers();
    jest.useFakeTimers();
    store = new Vuex.Store({ state, mutations });
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

  it("should stop decrementing time after 60 seconds", async () => {
    await wrapper.trigger("input");
    jest.advanceTimersByTime(60000);
    state.timeLeft = 0;
    jest.advanceTimersByTime(3000);
    expect(mutations.decrementTimeleft).toHaveBeenCalledTimes(60);
  });

  it("should be disabled once timeLeft reaches 0", () => {
    expect(wrapper.attributes().disabled).not.toBeUndefined();
  });
});
