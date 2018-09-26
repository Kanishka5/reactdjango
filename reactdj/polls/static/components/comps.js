import React, { Component } from 'react';
import Nav1 from './nav';
import Carousal1 from './carousal';
import Hokage from './hokage';
import HoverComp from './anim.js';
import Move from './moving.js';
import DashboardCard from './flipbox.js';
import FooterPage from './footer';
import NavbarFeatures from './navbar2';
import MultiCarouselPage from './carousel1';
import LightboxPage from './lightbox';
import About from './about';
import Hover from './hover';
import Landing from './landing';
import Anim1 from './anim1';
import Grid from './grid';
import Hover1 from './Hover_cnct';
import Hovercell from './cells_hover';

class Comps extends Component {
  render() {
    return (
        <div >
          <Landing/>
          <Hover1/>
          <Hovercell/>
        </div>
    );
  }
}

export default Comps;
