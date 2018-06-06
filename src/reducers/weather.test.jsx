import weather from "./weather";
import { setWeather } from "../actions/";

describe("weather reducer", () => {
  it("should handle initial state", () => {
    expect(weather(undefined, {})).toEqual({
      temperature: 0,
      pressure: 0,
      humidity: 0,
      description: "",
      icon: ""
    });
  });

  it("should handle SET_WEATHER action", () => {
    expect(
      weather(
        {
          temperature: 0,
          pressure: 0,
          humidity: 0,
          description: "",
          icon: ""
        },
        setWeather({
          temperature: 25,
          pressure: 1000,
          humidity: 500,
          description: "bezchmurno",
          icon: "02d"
        })
      )
    ).toEqual({
      temperature: 25,
      pressure: 1000,
      humidity: 500,
      description: "bezchmurno",
      icon: "02d"
    });
  });
});
