import Header from "./Header.vue";
import { Wrapper, createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import { findByTestAttribute } from "@/testing/utils";

const localVue = createLocalVue();
localVue.use(Vuex);

const createWrapper = (
  correctWords: number = 0,
  charsPerMinute: number = 0,
  wordsTotal: number = 0,
  timeLeft: number = 60
): Wrapper<Vue> => {
  const store = new Vuex.Store({
    state: {
      charsPerMinute,
      wordsTotal,
      correctWords,
      timeLeft,
    },
    getters: { accuracy: () => 98 },
  });
  return shallowMount(Header, { store, localVue });
};

describe("Header", () => {
  it("renders without errors", () => {
    const wrapper = createWrapper();
    expect(wrapper.exists()).toBe(true);
  });
  it("shows button wrapper when timeleft === 0", () => {
    const wrapper = createWrapper(0, 0, 0, 0);
    const buttonWrapper = findByTestAttribute(wrapper, "buttons");
    expect(buttonWrapper.exists()).toBe(true);
  });
  it("shows no button wrapper when timeleft !== 0", () => {
    const wrapper = createWrapper(0, 0, 0, 27);
    const buttonWrapper = findByTestAttribute(wrapper, "buttons");
    expect(buttonWrapper.exists()).toBe(false);
  });
});
