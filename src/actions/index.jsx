import * as types from "../constants/ActionTypes";

export const setCity = cityData => ({
  type: types.SET_CITY,
  ...cityData
});

export const setCoordinates = coordinatesData => ({
  type: types.SET_COORDINATES,
  ...coordinatesData
});
export const setWeather = weatherData => ({
  type: types.SET_WEATHER,
  ...weatherData
});

export const setBackgroundImage = imageUrl => ({
  type: types.SET_BACKGROUNDIMAGE,
  imageUrl: imageUrl
});
