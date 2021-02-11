import {shallowMount} from "@vue/test-utils";
import NavBar from "../NavBar";

const factory = () => {
  return shallowMount(NavBar, {});
};

describe("NavBar", () => {
  test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
