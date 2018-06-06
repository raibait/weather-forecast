import { connect } from "react-redux";
import DetailWeatherInfo from "../components/DetailWeatherInfo";

function mapStateToProps(state) {
  return {
    info: state.weather.humidity + ` g/m\xB3`
  };
}

export default connect(mapStateToProps)(DetailWeatherInfo);
