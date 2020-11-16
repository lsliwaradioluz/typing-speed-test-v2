import NavLink from "@/components/atoms/NavLink.vue";
import { mount, Wrapper, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("NavLink", () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = mount(NavLink, {
      localVue,
      router,
      propsData: {
        to: "scores",
      },
    });
  });

  it("renders withour errors", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
