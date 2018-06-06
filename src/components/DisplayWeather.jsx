import React, { Component } from "react";
import urlForName from "./images.jsx";
import "./DisplayWeather.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TemperatureContainer from "../containers/TemperatureContainer";
import PressureContainer from "../containers/PressureContainer";
import HumidityContainer from "../containers/HumidityContainer";

import * as cityList from "../constants/city.list.json";

class DisplayWeather extends Component {
  state = { showAlertMsg: false };
  handleKeyPress = e => {
    if (e.key === "Enter") {
      for (var i in cityList) {
        if (
          this._input.value.toUpperCase() === cityList[i].name.toUpperCase()
        ) {
          this.setState({ showAlertMsg: false });
          this.props.setCity({ city: cityList[i].name });
          break;
        } else {
          this.setState({ showAlertMsg: true });
        }
      }
    }
  };

  render() {
    const { backgroundImageUrl, icon, city, description } = this.props;
    return (
      <Router>
        <div
          className="display-weather"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="display-weather__info-content">
            <div className="display-weather__info-content--wrapper">
              {icon ? (
                <img
                  className="display-weather__icon"
                  src={urlForName(icon)}
                  alt="Brak obrazka :("
                />
              ) : null}

              <br />
              <Route exact path="/" component={TemperatureContainer} />
              <Route path="/Pressure" component={PressureContainer} />
              <Route path="/Humidity" component={HumidityContainer} />
              <br />
              {city || description ? (
                <span className="display-weather__info-header">
                  {city} - {description}
                </span>
              ) : null}
            </div>
          </div>
          <div>
            <div className="display-weather__buttons">
              <Link to="/">
                <button className="display-weather__button">Temperatura</button>
              </Link>
              <Link to="/Humidity">
                <button className="display-weather__button">Wilgotność</button>
              </Link>
              <Link to="/Pressure">
                <button className="display-weather__button">Ciśnienie</button>
              </Link>
            </div>
            <input
              className="display-weather__input"
              id="display-weather__input"
              type="text"
              placeholder="Znajdź miasto..."
              ref={input => (this._input = input)}
              onKeyPress={this.handleKeyPress}
            />
            <span
              className={
                this.state.showAlertMsg
                  ? "display-weather__alert"
                  : "display-weather__alert--hidden"
              }
            >
              Postaraj się szukać nazw miast w ojczystym języku
            </span>
          </div>
        </div>
      </Router>
    );
  }
}

export default DisplayWeather;
