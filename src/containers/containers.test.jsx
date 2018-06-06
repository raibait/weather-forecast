import React from "react";
import { shallow, configure } from "enzyme";
import TemperatureContainer from "./TemperatureContainer";
import HumidityContainer from "./HumidityContainer";
import PressureContainer from "./PressureContainer";
import DisplayWeatherContainer from "./DisplayWeatherContainer";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// Create the mock store
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();

const shallowWithStore = (component, store) => {
  const context = {
    store
  };
  return shallow(component, { context });
};

describe("TemperatureContainer", () => {
  it("set valid 'temperature' prop", () => {
    const testState = {
      weather: { temperature: 20 }
    };
    const store = mockStore(testState);
    let component = shallowWithStore(<TemperatureContainer />, store);
    expect(component.props().info).toBe("20\xBAC");
  });
});

describe("PressureContainer", () => {
  it("set valid 'pressure' prop", () => {
    const testState = {
      weather: { pressure: 20 }
    };
    const store = mockStore(testState);
    let component = shallowWithStore(<PressureContainer />, store);
    expect(component.props().info).toBe("20 hPa");
  });
});

describe("HumidityContainer", () => {
  it("set valid 'humidity' prop", () => {
    const testState = {
      weather: { humidity: 20 }
    };
    const store = mockStore(testState);
    let component = shallowWithStore(<HumidityContainer />, store);
    expect(component.props().info).toBe("20 g/m\xB3");
  });
});

describe("DisplayWeatherContainer", () => {
  const testState = {
    location: { city: "Poznan" },
    weather: {
      icon: "02d",
      description: "bezchmurnie"
    },
    backgroundImage: { imageUrl: "testUrl" }
  };

  const store = mockStore(testState);

  let component = shallowWithStore(<DisplayWeatherContainer />, store);
  it("set valid 'city' prop", () => {
    expect(component.props().city).toBe(testState.location.city);
  });

  it("set valid 'icon' prop", () => {
    expect(component.props().icon).toBe(testState.weather.icon);
  });

  it("set valid 'description' prop", () => {
    expect(component.props().description).toBe(testState.weather.description);
  });

  it("set valid 'backgroundImage' prop", () => {
    expect(component.props().backgroundImageUrl).toBe(
      testState.backgroundImage.imageUrl
    );
  });
});
