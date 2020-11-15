import GuessedWords from "@/components/atoms/TestZoneGuessedWords.vue";
import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import Vuex, { Store } from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TestZoneGuessedWords", () => {
  let wrapper: Wrapper<Vue>;
  let store: Store<any>;
  let state = { guessedWords: [] };

  beforeEach(() => {
    store = new Vuex.Store({
      state,
    });
    wrapper = mount(GuessedWords, { store, localVue });
  });

  it("renders without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
