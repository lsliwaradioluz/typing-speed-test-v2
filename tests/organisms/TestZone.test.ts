import TestZone from "@/components/organisms/TestZone.vue";
import { shallowMount } from "@vue/test-utils";

describe("TestZone", () => {
  it("renders without errors", () => {
    const wrapper = shallowMount(TestZone);
    expect(wrapper.exists()).toBe(true);
  });
});
