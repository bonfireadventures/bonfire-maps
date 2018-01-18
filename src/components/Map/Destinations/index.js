import React, { Component } from "react";
import { JaneLayer, MapLayer, Source } from "jane-maps";
import SideBar from "./SideBar";

const Destinations = props => {
  return (
    <JaneLayer
      id="feature"
      name="Feature"
      icon="university"
      defaultSelected
      component={<SideBar />}
    >
      <Source id="feature" type="geojson" data={props.sites} />

      <MapLayer
        id="feature"
        source="feature"
        type="circle"
        paint={{
          "circle-radius": 10,
          "circle-color": "steelblue",
          "circle-opacity": 0.7
        }}
        onClick={props.onDestClick}
      />
    </JaneLayer>
  );
};

export default Destinations;
