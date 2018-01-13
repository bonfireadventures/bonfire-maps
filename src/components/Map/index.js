import React, { Component } from "react";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Jane } from "jane-maps";
import { mapboxGLOptions } from "../../config";
import Destinations from "./Destinations";

import "jane-maps/dist/styles.css";

injectTapEventPlugin();

class Mapp extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="fullscreen">
            <Jane mapboxGLOptions={mapboxGLOptions}>
              <Destinations />
            </Jane>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default connect(null)(Mapp);
