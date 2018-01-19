import React from "react";
import "./Map.css";
import { connect } from "react-redux";
import {
  CSSTransition,
  CSSTransitionGroup,
  transit
} from "react-css-transition";

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.magical
  };
};

const SelectedFeatures = props => (
  <CSSTransition
    {...props}
    defaultStyle={{ opacity: 0 }}
    enterStyle={{ opacity: transit(1.0, 50, "ease-in-out") }}
    leaveStyle={{ opacity: transit(0,50, "ease-in-out") }}
    activeStyle={{ opacity: 1.0 }}
  />
);

const SelectedFeaturesGroup = props => (
  <CSSTransitionGroup {...props}>
    {React.Children.map(props.children, child => (
      <SelectedFeatures>{child}</SelectedFeatures>
    ))}
  </CSSTransitionGroup>
);

const SidePop = props => {
  let features;
  if (props.clickedDest && props.clickedDest.length > 0) {
    features = props.clickedDest.map((feature, i) => {
      const dest = feature.properties;
      return (
        <a href="/facility/40035" key={i}>
          <div
            className="facilities-list-item"
            style={{ borderLeft: "5px solid rgb(186, 104, 200);]" }}
          >
            <div className="title" />
            <div className="subtitle">{dest.title}</div>
            <div className="subtitle">{dest.city_town}</div>
            <div className="subtitle">
              <span className="operated-by"></span>
            </div>
            <i className="fa fa-chevron-right" />
          </div>
        </a>
      );
    });
  }

  return (
    <div>
      <SelectedFeaturesGroup>{features}</SelectedFeaturesGroup>
    </div>
  );
};

export default connect(mapStateToProps)(SidePop);
