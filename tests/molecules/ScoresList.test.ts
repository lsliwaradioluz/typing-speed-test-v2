import ScoresList from "@/components/molecules/ScoresList.vue";
import { findByTestAttribute } from "@/testing/utils";
import { mount, Wrapper, createLocalVue } from "@vue/test-utils";
import axios from "axios";
import VueAxios from "vue-axios";

const localVue = createLocalVue();
localVue.use(VueAxios, axios);

const response = {
  data: {
    1: { name: "Łukasz", accuracy: 40, characters: 211, words: 27 },
    2: { name: "Stefan", accuracy: 38, characters: 213, words: 27 },
    3: { name: "Krzysztof", accuracy: 32, characters: 212, words: 27 },
  },
};

jest.mock("axios", () => {
  return {
    get: jest.fn(() => response),
  };
});

describe("ScoresList", () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = mount(ScoresList, {
      localVue,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("fetches scores on mount", () => {
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it("saves fetched scores in data => scores", () => {
    expect(wrapper.vm.$data.scores).toEqual(response.data);
  });

  it("renders scores.length list items sorted descending by characters", () => {
    const sortedScores = Object.values(response.data).sort(
      (a, b) => b.characters - a.characters
    );
    const scoreNodes = wrapper.findAll(".score");
    let sortedScoreNodes = [];
    for (let i = 0; i < scoreNodes.length; i++) {
      const currentNode = scoreNodes.at(i);
      const name = findByTestAttribute(currentNode, "score-name")
        .text()
        .split(" ")[1];
      const accuracy = +findByTestAttribute(currentNode, "score-accuracy")
        .text()
        .split(" ")[1];
      const characters = +findByTestAttribute(currentNode, "score-characters")
        .text()
        .split(" ")[1];
      const words = +findByTestAttribute(currentNode, "score-words")
        .text()
        .split(" ")[1];

      sortedScoreNodes.push({ name, accuracy, characters, words });
    }

    expect(sortedScoreNodes).toEqual(Object.values(sortedScores));
  });
});
