import React, { Component } from 'react';
import Nav1 from './nav';
import Carousal1 from './carousal';
import Clans from './clans';
import Hokage from './hokage';
import HoverComp from './anim.js';
import Move from './moving.js';
import DashboardCard from './flipbox.js';
import FooterPage from './footer';
import NavbarFeatures from './navbar2';
import MultiCarouselPage from './carousel1';
import LightboxPage from './lightbox';
import About from './about';

import Landing from './landing';


class Comps extends Component {
  render() {
    return (
        <div >
          <Landing/>
          <About/>
          <FooterPage/>
        </div>
    );
  }
}

export default Comps;
