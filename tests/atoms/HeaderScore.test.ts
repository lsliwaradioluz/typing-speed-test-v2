import HeaderScore from "@/components/atoms/HeaderScore.vue";
import { shallowMount } from "@vue/test-utils";

interface Score {
  number: number;
  caption: string;
}

describe("HeaderScore", () => {
  let propsData: Score = {
    number: 0,
    caption: "Random number",
  };

  it("renders without errors", () => {
    const wrapper = shallowMount(HeaderScore, {
      propsData,
    });
    expect(wrapper.exists()).toBe(true);
  });
});
