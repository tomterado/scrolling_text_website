import React from "react"

import "../styling/square.css"
import "../styling/scrollText.css"
import Layout from "../components/layout"


class MainLanding extends React.Component {
  render() {


    // Need to optimise for mobile

    return (
      <div>
        <div className="example1">
          <h3>Salt & Pepper </h3>
        </div>
        <div className="example2">
          <h3>Salt & Pepper </h3>
        </div>
        <div className="example1">
          <h3>Salt & Pepper </h3>
        </div>
        <div className="example2">
          <h3>Salt & Pepper </h3>
        </div>
      </div>
    );
  }
};

export default MainLanding;