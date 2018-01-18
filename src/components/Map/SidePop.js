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

const FadeInOut = props => (
  <CSSTransition
    {...props}
    defaultStyle={{ opacity: 0 }}
    enterStyle={{ opacity: transit(1.0, 500, "ease-in-out") }}
    leaveStyle={{ opacity: transit(0, 500, "ease-in-out") }}
    activeStyle={{ opacity: 1.0 }}
  />
);

const FadeInOutGroup = props => (
  <CSSTransitionGroup {...props}>
    {React.Children.map(props.children, child => (
      <FadeInOut>{child}</FadeInOut>
    ))}
  </CSSTransitionGroup>
);

const SidePop = props => {
  let items;
  if (props.clickedDest && props.clickedDest.length > 0) {
    console.log(props.clickedDest);
    items = props.clickedDest.map((item, i) => {
      const dest = item.properties;
      console.log(dest);
      return (
        <a href="/facility/40035" key={i}>
          <div
            className="facilities-list-item"
            style={{ borderLeft: "5px solid rgb(186, 104, 200);]" }}
          >
            <div className="title" />
            <div className="subtitle">{dest.title}</div>
            <div className="subtitle">235 East Broadway</div>
            <div className="subtitle">
              <span className="operated-by">Operated by:</span>
            </div>
            <i className="fa fa-chevron-right" />
          </div>
        </a>
      );
    });
  }

  return (
    <div>
      <FadeInOutGroup>{items}</FadeInOutGroup>
    </div>
  );
};

export default connect(mapStateToProps)(SidePop);
