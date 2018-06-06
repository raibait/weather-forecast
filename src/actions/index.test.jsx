import * as types from "../constants/ActionTypes";
import * as actions from "./index";

describe("location actions", () => {
  it("setCity should create SET_CITY action", () => {
    expect(actions.setCity({ test: "test" })).toEqual({
      type: types.SET_CITY,
      test: "test"
    });
  });

  it("setCoordinates should create SET_COORDINATES action", () => {
    expect(actions.setCoordinates({ test: "test" })).toEqual({
      type: types.SET_COORDINATES,
      test: "test"
    });
  });
});

describe("weather actions", () => {
  it("setWeather should create SET_WEATHER action", () => {
    expect(actions.setWeather({ test: "test" })).toEqual({
      type: types.SET_WEATHER,
      test: "test"
    });
  });
});
