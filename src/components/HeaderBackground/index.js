import React, { Component } from "react";

import ParticlesBg from "particles-bg";

class HeaderBackground extends Component {
  render() {
    return (
      <div className="header-bg">
        <ParticlesBg type="cobweb" color="#ffffff" bg={false} />
      </div>
    );
  }
}

export default HeaderBackground;