import React, { Component } from "react";

import ParticlesBg from "particles-bg";

class HeaderBackground extends Component {
  render() {
    return (
      <>
        <ParticlesBg type="cobweb" color="#ffffff" bg={true} />
      </>
    );
  }
}

export default HeaderBackground;