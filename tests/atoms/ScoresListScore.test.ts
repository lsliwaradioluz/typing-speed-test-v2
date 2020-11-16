import Score from "@/components/atoms/ScoresListScore.vue";
import { mount, Wrapper } from "@vue/test-utils";

const score = {
  name: "Łukasz",
  accuracy: 40,
  characters: 211,
  words: 27,
};

describe("ScoresListScore", () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = mount(Score, {
      propsData: {
        score,
      },
    });
  });

  it("renders without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("receives a required 'score' prop", () => {
    expect(wrapper.props("score")).not.toBeUndefined();
  });

  it("displays all keys of score prop object", () => {
    const scoreObjLength = Object.keys(score).length;
    const listElements = wrapper.find("ul").findAll("li");
    expect(listElements.length).toBe(scoreObjLength);
  });
});
