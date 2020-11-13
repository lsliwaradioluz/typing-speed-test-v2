import HeaderButtons from "./HeaderButtons.vue";
import { shallowMount, Wrapper, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { findByTestAttribute } from "../../testing/utils";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("HeaderButtons", () => {
  let wrapper: Wrapper<Vue>;
  const mutations = {
    openSaveScore: jest.fn(),
    resetScore: jest.fn(),
  };

  beforeEach(() => {
    const store = new Vuex.Store({ mutations });
    wrapper = shallowMount(HeaderButtons, { store, localVue });
  });
  
  it("renders without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("commits openSaveScore mutation on save score button click", () => {
    const mockFn = mutations.openSaveScore;
    const button = findByTestAttribute(wrapper, "save-score-btn");
    button.trigger("click");
    expect(mockFn).toHaveBeenCalled();
  });

  it("commings resetScore mutation on reset score button click", () => {
    const mockFn = mutations.resetScore;
    const button = findByTestAttribute(wrapper, "reset-score-btn");
    button.trigger("click");
    expect(mockFn).toHaveBeenCalled();
  });
});
