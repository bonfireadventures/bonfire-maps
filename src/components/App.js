import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { APP_LOAD } from "../constants/actionTypes";
import Header from "./Header";
import Home from "./Home";
import Mapp from "./Map";
import { connect } from "react-redux";
import "./App.css";
import LoadingBar from "react-redux-loading-bar";

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName
  };
};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) => dispatch({ type: APP_LOAD, token })
});

class App extends Component {
  componentWillMount() {
    const token = window.localStorage.getItem("jwt");
    this.props.onLoad(token ? { user: true } : null, token);
  }
  render() {
    return (
      <Router>
        <div>
          <header>
            <LoadingBar
              style={{ backgroundColor: "rgb(0, 188, 212)", zIndex: 1 }}
            />
            <Header />
          </header>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/map`} component={Mapp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
