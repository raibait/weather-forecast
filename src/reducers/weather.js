import { SET_WEATHER } from "../constants/ActionTypes";

const initialState = {
  temperature: 0,
  pressure: 0,
  humidity: 0,
  description: "",
  icon: ""
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        temperature: action.temperature,
        pressure: action.pressure,
        humidity: action.humidity,
        description: action.description,
        icon: action.icon
      };
    default:
      return { ...state };
  }
};
export default weather;
