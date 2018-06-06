import { connect } from "react-redux";
import DisplayWeather from "../components/DisplayWeather";
import { setCity } from "../actions";
function mapStateToProps(state) {
  return {
    city: state.location.city,
    icon: state.weather.icon,
    description: state.weather.description,
    backgroundImageUrl: state.backgroundImage.imageUrl
  };
}

export default connect(mapStateToProps, { setCity })(DisplayWeather);
