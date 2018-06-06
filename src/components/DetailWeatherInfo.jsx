import React from "react";

const DetailWeatherInfo = ({ info }) => {
  return <span style={{ fontSize: "15vh" }}>{info ? info : null}</span>;
};

export default DetailWeatherInfo;
