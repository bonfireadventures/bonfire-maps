import React, { Component } from "react";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Jane, JaneLayer, MapLayer, Source } from "jane-maps";
import { mapboxGLOptions } from "../../config";

import "jane-maps/dist/styles.css";

injectTapEventPlugin();

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

class Mapp extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="fullscreen">
            <Jane mapboxGLOptions={mapboxGLOptions}>
              <JaneLayer
                id="feature"
                name="Feature"
                icon="university"
                defaultSelected
                component={<div> This is a simple feature </div>}
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
            </Jane>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default connect(null)(Mapp);
