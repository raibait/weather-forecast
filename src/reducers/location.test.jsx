import location from "./location";
import { setCity, setCoordinates } from "../actions/";

describe("location reducer", () => {
  it("should handle initial state", () => {
    expect(location(undefined, {})).toEqual({
      city: "Poznan",
      latitude: 0,
      longitude: 0
    });
  });

  it("should handle SET_CITY action", () => {
    expect(
      location(
        {
          latitude: 0,
          longitude: 0
        },
        setCity({ city: "Warszawa" })
      )
    ).toEqual({
      city: "Warszawa",
      latitude: 0,
      longitude: 0
    });
  });

  it("should handle SET_COORDINATES action", () => {
    expect(
      location(
        { city: "Poznan" },
        setCoordinates({
          latitude: 90,
          longitude: 90
        })
      )
    ).toEqual({
      city: "Poznan",
      latitude: 90,
      longitude: 90
    });
  });
});
