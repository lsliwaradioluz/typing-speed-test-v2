import InstructionsListItem from "./InstructionsListItem.vue";
import { mount } from "@vue/test-utils";

describe("InstructionsListItem", () => {
  it("renders without errors", () => {
    const wrapper = mount(InstructionsListItem);
    expect(wrapper.exists()).toBe(true);
  });
  it("renders the content passed via slot correctly", () => {
    const wrapper = mount(InstructionsListItem, {
      slots: {
        default: "Example text passed by slot",
      },
    });
    expect(wrapper.text()).toBe("Example text passed by slot");
  });
  it("renders default text if nothing passed via slot", () => {
    const wrapper = mount(InstructionsListItem);
    expect(wrapper.text()).toBe("Defaultowy tekst slotowy");
  });
});
