import { combineReducers } from "redux";
import location from "./location";
import weather from "./weather";
import backgroundImage from "./backgroundImage";
const rootReducer = combineReducers({
  location,
  weather,
  backgroundImage
});

export default rootReducer;
