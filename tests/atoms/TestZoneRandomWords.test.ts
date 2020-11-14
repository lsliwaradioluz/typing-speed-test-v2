import RandomWords from "@/components/atoms/TestZoneRandomWords.vue";
import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import Vuex, { Store, Getter, GetterTree } from "vuex";
import { findByTestAttribute } from "@/testing/utils";
import { State } from "@/store/state";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TestZoneRandomWords", () => {
  let wrapper: Wrapper<Vue>;
  let store: Store<State>;
  let getters: GetterTree<State, any>;
  const CURRENT_WORD = "current";
  const REMAINING_WORDS = ["now", "then", "here", "there"];

  beforeEach(() => {
    getters = {
      currentWord: (): string => CURRENT_WORD,
      remainingWords: (): string[] => REMAINING_WORDS,
    };

    store = new Vuex.Store({ getters });

    wrapper = mount(RandomWords, { store, localVue });
  });

  it("renders without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the right current word", () => {
    const currentWordNode = findByTestAttribute(wrapper, "current-word");
    expect(currentWordNode.text()).toBe(CURRENT_WORD);
  });

  it("renders the right remaining words", () => {
    const currentWordNode = findByTestAttribute(wrapper, "remaining-words");
    const remainingWords = REMAINING_WORDS.join(" ");
    expect(currentWordNode.text()).toBe(remainingWords);
  });
});
