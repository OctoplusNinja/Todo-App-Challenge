import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        created by{" "}
        <a
          href="https://github.com/OctoplusNinja"
          target="_blank"
          rel="noopener noreferrer"
        >
          @OctoplusNinja
        </a>
      </div>
    );
  }
}

export default Footer;
