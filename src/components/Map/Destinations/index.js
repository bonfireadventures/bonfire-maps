import React from "react";
import { JaneLayer, MapLayer, Source } from "jane-maps";
import SideBar from "./SideBar";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.magical,
  appName: state.common.appName,
  token: state.common.token
});

const Destinations = props => {
  console.log(props)
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
      />
    </JaneLayer>
  );
};

export default connect(mapStateToProps)(Destinations);
