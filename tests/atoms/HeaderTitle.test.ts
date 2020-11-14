import HeaderTitle from "@/components/atoms/HeaderTitle.vue";
import { shallowMount } from "@vue/test-utils";

describe("HeaderTitle", () => {
  it("renders without errors", () => {
    const wrapper = shallowMount(HeaderTitle);
    expect(wrapper.exists()).toBe(true);
  });
});
