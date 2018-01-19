import React from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import "react-select/dist/react-select.css";

const SideBar = props => {
  return (
    <div>
      <Tabs className="sidebar-tabs">
        <Tab label="Filter" style={{ backgroundColor: "rgb(177, 177, 177)" }}>
          <div className="sidebar-tab-content">
            <div
              style={{
                padding: "15px"
              }}
            >
              <h4>Kenya Destinations</h4>
            </div>
          </div>
        </Tab>
        <Tab label="List" style={{ backgroundColor: "rgb(177, 177, 177)" }}>
          <div className="sidebar-tab-content">
            <div className="padded">
              <p>List data here</p>
              <p />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SideBar;
