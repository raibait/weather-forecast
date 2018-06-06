import React from "react";
import { shallow, configure } from "enzyme";
import DetailWeatherInfo from "./DetailWeatherInfo";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const setupComponent = props => shallow(<DetailWeatherInfo {...props} />);

describe("DetailWeatherInfo component", () => {
  it("should render correct info that is passed via props", () => {
    let component = setupComponent({ info: "Random info" });
    expect(component.text()).toBe("Random info");
  });

  it("shouldn't pass text without props", () => {
    let component = setupComponent();
    expect(component.text()).toBe("");
  });
});
