import { connect } from "react-redux";
import DetailWeatherInfo from "../components/DetailWeatherInfo";

function mapStateToProps(state) {
  return {
    info: state.weather.temperature + `\xBAC`
  };
}

export default connect(mapStateToProps)(DetailWeatherInfo);
