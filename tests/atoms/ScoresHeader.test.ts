import ScoresHeader from "@/components/atoms/ScoresHeader.vue";
import { mount, Wrapper } from "@vue/test-utils";

describe("ScoresHeader", () => {
  let wrapper: Wrapper<Vue>;
  let slotContent: string;

  beforeEach(() => {
    slotContent = "Tablica wyników";
    wrapper = mount(ScoresHeader, {
      slots: {
        default: slotContent,
      },
    });
  });

  it("renders without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders text passed via slot", () => {
    const text = wrapper.element.textContent;
    expect(text).toBe(slotContent);
  });
});
