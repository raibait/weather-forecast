import React from "react";
import { mount, shallow, configure } from "enzyme";
import DisplayWeather from "./DisplayWeather";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const setupComponent = props => shallow(<DisplayWeather {...props} />);

describe("DisplayWeather", () => {
  it("renders any div", () => {
    const divs = setupComponent().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("renders display-weather which is container div", () => {
    let wrapper = setupComponent();
    let container = wrapper.find("div").first();
    expect(container.hasClass("display-weather")).toEqual(true);
  });

  it("renders display-weather span if has prop 'city' or 'description'", () => {
    let wrapper = setupComponent({
      city: "Poznan",
      description: "bezchmurnie"
    });
    let span = wrapper.find("span.display-weather__info-header");
    expect(span.exists()).toEqual(true);
  });

  it("doesn't render display-weather header if hasn't prop 'city' or 'description'", () => {
    let wrapper = setupComponent();
    let span = wrapper.find("span.display-weather__info-header");
    expect(span.exists()).toEqual(false);
  });

  it("renders icon if has prop 'icon'", () => {
    let iconExample = "01d";
    let wrapper = setupComponent({ icon: iconExample });
    let icon = wrapper.find("img.display-weather__icon").prop("src");
    expect(icon).toEqual(iconExample + ".svg");
  });

  it("doesn't render icon if hasn't prop 'icon", () => {
    let wrapper = setupComponent();
    let icon = wrapper.find("img.display-weather__icon");
    expect(icon.exists()).toEqual(false);
  });
});
