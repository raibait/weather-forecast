import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setWeather, setBackgroundImage } from "../actions";
import {
  imageEngineId,
  googleApiKey,
  weatherApiId,
  units,
  language
} from "../constants";
import DisplayWeatherContainer from "../containers/DisplayWeatherContainer";
import GoogleImages from "google-images";

const client = new GoogleImages(imageEngineId, googleApiKey);

export class App extends Component {
  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    this.getData();
  }

  getData = () => {
    client
      .search(this.props.city, {
        size: "xxlarge"
      })
      .then(images => {
        let bestImage = this.pickBestImage(images);
        if (bestImage) this.props.setBackgroundImage(bestImage);
      });

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${
          this.props.city
        }&APPID=${weatherApiId}&units=${units}&lang=${language}`
      )
      .then(resp => {
        console.log(resp);
        return this.props.setWeather({
          temperature: resp.data.main.temp,
          pressure: resp.data.main.pressure,
          humidity: resp.data.main.humidity,
          description: resp.data.weather[0].description,
          icon: resp.data.weather[0].icon
        });
      });
  };

  pickBestImage = images => {
    let bigImages = [];
    images.forEach(element => {
      if (element.width >= 1000) bigImages.push(element);
    });
    return bigImages[Math.floor(Math.random() * bigImages.length)].url;
  };

  render() {
    return (
      <div>
        <DisplayWeatherContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    city: state.location.city
  };
};

export default connect(mapStateToProps, { setWeather, setBackgroundImage })(
  App
);
