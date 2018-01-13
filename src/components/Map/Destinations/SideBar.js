import React from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import "react-select/dist/react-select.css";

const SideBar = props => {
  return (
    <div>
      <Tabs className="sidebar-tabs">
        <Tab label="Data" style={{backgroundColor:"rgb(177, 177, 177)"}}>
          <div className="sidebar-tab-content">
            <div
              style={{
                padding: "15px"
              }}
            >
              <h4>Kenya Counties</h4>
            </div>
          </div>
        </Tab>
        <Tab label="About">
          <div className="sidebar-tab-content">
            <div className="padded">
              <h4>Source of Data</h4>
              <p>The Counties data is obtained from IEBC</p>
              <p />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SideBar;
