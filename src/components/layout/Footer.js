import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer
          className="text-light p-4 text-center"
          style={{ backgroundColor: "#17539E" }}
        >
          Copyright &copy; {new Date().getFullYear()} Embratec Nordeste
        </footer>
      </div>
    );
  }
}
