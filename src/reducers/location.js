import { SET_CITY, SET_COORDINATES } from "../constants/ActionTypes";

const initialState = {
  city: "Poznan",
  latitude: 0,
  longitude: 0
};

const location = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        city: action.city
      };
    case SET_COORDINATES:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude
      };
    default:
      return { ...state };
  }
};
export default location;
