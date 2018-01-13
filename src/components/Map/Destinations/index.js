import React from "react";
import { JaneLayer, MapLayer, Source } from "jane-maps";
import SideBar from "./SideBar";

const featureSource = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [36.8219, -1.2921]
      }
    }
  ]
};

const Destinations = () => {
  return (
    <JaneLayer
      id="feature"
      name="Feature"
      icon="university"
      defaultSelected
      component={<SideBar />}
    >
      <Source id="feature" type="geojson" data={featureSource} />

      <MapLayer
        id="feature"
        source="feature"
        type="circle"
        paint={{
          "circle-radius": 10,
          "circle-color": "steelblue",
          "circle-opacity": 0.7
        }}
      />
    </JaneLayer>
  );
};

export default Destinations;
