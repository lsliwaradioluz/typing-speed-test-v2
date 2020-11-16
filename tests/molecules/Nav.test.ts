import Navigation from "@/components/molecules/Nav.vue";
import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("Nav", () => {
  let wrapper: Wrapper<Vue>;
  
  beforeEach(() => {
    wrapper = mount(Navigation, {
      localVue,
      router,
    });
  });

  it("renders without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders 2 links", () => {
    const links = wrapper.findAll("li");
    expect(links.length).toBe(2);
  });
});
