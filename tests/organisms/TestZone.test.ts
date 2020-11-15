import TestZone from "@/components/organisms/TestZone.vue";
import { shallowMount, Wrapper, createWrapper } from "@vue/test-utils";

describe("TestZone", () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = shallowMount(TestZone);
  });

  it("renders without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("emits 'focus-input' event on click", async () => {
    const rootWrapper = createWrapper(wrapper.vm.$root);
    await wrapper.trigger("click");
    expect(rootWrapper.emitted("focus-input")).not.toBe(undefined);
  });
});
