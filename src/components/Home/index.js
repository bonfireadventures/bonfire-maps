import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { withRouter } from "react-router-dom";
import logo from "../../logo1.png";

const Home = withRouter(({ history }) => {
  return (
    <div>
      <div className="explorer-landing">
        <section className="header-area">
          <div className="container">
            <div className="row">
              <div className="section-bg col-lg-10 col-lg-offset-1 text-center">
                <h1 className="section-heading">
                  <img src={logo} alt="img" />
                </h1>
                <p className="subtitle">
                  Discover and Experience the best of Kenya Tourism
                </p>
                <p className="learn-more">
                  <Link to={`${process.env.PUBLIC_URL}/about`}>Learn More</Link>
                </p>
                <div className="splash-button-section">
                  <div className="box all-link">
                    <Link
                      className="btn btn-default"
                      to={`${process.env.PUBLIC_URL}/map`}
                    >
                      <div className="vertical-align"> View Map</div>
                    </Link>
                  </div>
                  <div className="box or-text">
                    <div className="vertical-align">or</div>
                  </div>
                  <div className="box all-link">
                    <Link
                      className="btn btn-default"
                      to={`${process.env.PUBLIC_URL}/`}
                    >
                      <div className="vertical-align"> Explore a Region</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

export default Home;
