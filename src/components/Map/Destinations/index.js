import React from "react";
import { JaneLayer, MapLayer, Source } from "jane-maps";
import SideBar from "./SideBar";

const Destinations = props => {
  // const renderFeatureOutline = () => {
  //   if (!props.selectedFeature) {
  //     console.log(props.selectedFeature);
  //     return null;
  //   }
  //   return [
  //     <Source
  //       id="selected-feature-outline"
  //       type="geojson"
  //       data={{
  //         type: "FeatureCollection",
  //         features: [props.selectedFeature[0]]
  //       }}
  //     />,
  //     <MapLayer
  //       id="selected-feature-outline"
  //       source="selected-feature-outline"
  //       type="circle"
  //       paint={{
  //         "circle-color": "#000",
  //         "circle-opacity": 0.7,
  //         "circle-radius": 15
  //       }}
  //     />
  //   ].map((child, index) => ({ ...child, key: index }));
  // };
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
      {/* {renderFeatureOutline()} */}
    </JaneLayer>
  );
};

export default Destinations;
