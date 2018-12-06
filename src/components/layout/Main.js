import React, { Component } from "react";
import SimpleSlider from "../dinamic/SimpleSlider";

export default class Main extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: "calc(100vh - 72px - 56px)",
          textAlign: "center",
          backgroundColor: "#58A7FF"
        }}
      >
        <h3>Carrosel Super fantastico amigo</h3>
        <div
          style={{
            minHeight: 400,
            width: "40%",
            margin: "auto",
            marginTop: 100
          }}
        >
          <SimpleSlider />
        </div>
      </div>
    );
  }
}
