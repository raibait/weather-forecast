import React from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { shallow, configure } from "enzyme";
import AppConnected, { App } from "./App";
import { apiId, units, language } from "../constants";
import { setWeather } from "../actions";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// Create the mock store
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

const shallowWithStore = (component, store) => {
  const context = {
    store
  };
  return shallow(component, { context });
};

describe("App", () => {
  it("should get state passed to props", () => {
    const testState = {
      location: { city: "Poznan" }
    };
    const store = mockStore(testState);
    let component = shallowWithStore(<AppConnected />, store);
    expect(component.props().city).toBe(testState.location.city);
  });

  it("should callback setWeather with proper props, and should call it on componentDidMount", () => {
    const props = {
      city: "poznan",
      setWeather: jest.fn()
    };
    const onGetUrl = `http://api.openweathermap.org/data/2.5/weather?q=${
      props.city
    }&APPID=${apiId}&units=${units}&lang=${language}`;
    const component = shallow(<App {...props} />);
    mock.onGet(onGetUrl).reply(200, {
      main: {
        temp: 30,
        pressure: 1000,
        humidity: 500
      },
      weather: [{ description: "bezchmurnie", icon: "01d" }]
    });
    const instance = component.instance();
    console.log(instance);
    console.log(instance.getData);
    instance.getData().then(() => {
      expect(props.setWeather.mock.calls.length).toBe(2); // 2 becouse it runs on componentDidMount as well
      expect(props.setWeather).toBeCalledWith({
        temperature: 30,
        pressure: 1000,
        humidity: 500,
        description: "bezchmurnie",
        icon: "01d"
      });
    });
  });
});
