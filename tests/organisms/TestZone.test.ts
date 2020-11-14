import TestZone from "@/components/organisms/TestZone.vue";
import { mount } from "@vue/test-utils";

describe("TestZone", () => {
  it("renders without errors", () => {
    const wrapper = mount(TestZone);
    expect(wrapper.exists()).toBe(true);
  });
});
