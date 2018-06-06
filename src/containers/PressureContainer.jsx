import { connect } from "react-redux";
import DetailWeatherInfo from "../components/DetailWeatherInfo";

function mapStateToProps(state) {
  return {
    info: state.weather.pressure + ` hPa`
  };
}

export default connect(mapStateToProps)(DetailWeatherInfo);
