import { Wrapper, createLocalVue } from "@vue/test-utils";

export const findByTestAttribute = (
  wrapper: Wrapper<Vue>,
  attributeValue: string
): Wrapper<Vue> => wrapper.find(`[data-test="${attributeValue}"]`);

