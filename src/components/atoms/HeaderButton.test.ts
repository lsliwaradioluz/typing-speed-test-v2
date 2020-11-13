import HeaderButton from "./HeaderButton.vue";
import { shallowMount } from "@vue/test-utils";

describe("HeaderButton", () => {
  it("renders without errors", () => {
    const wrapper = shallowMount(HeaderButton);
    expect(wrapper.exists()).toBe(true);
  });
});
