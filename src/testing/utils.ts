import { Wrapper, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

export const findByTestAttribute = (
  wrapper: Wrapper<Vue>,
  attributeValue: string
): Wrapper<Vue> => wrapper.find(`[data-test="${attributeValue}"]`);
