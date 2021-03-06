import Instructions from "@/components/molecules/Instructions.vue";
import Instruction from "@/components/atoms/InstructionsListItem.vue";
import { mount, Wrapper } from "@vue/test-utils";

describe("Instructions", () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = mount(Instructions);
  });
  it("renders without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("renders correct number of Instruction components", () => {
    const instructions = [1, 2, 3, 4, 5, 6, 7];
    const wrapper = mount(Instructions, {
      data() {
        return {
          instructions,
        };
      },
    });
    const numberOfInstructions = wrapper.findAllComponents(Instruction).length;
    expect(numberOfInstructions).toBe(instructions.length);
  });
});
