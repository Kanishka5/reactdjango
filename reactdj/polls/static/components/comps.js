import React, { Component } from 'react';
import Nav1 from './nav';
import Carousal1 from './carousal';
import About from './about';
import Clans from './clans';
import Hokage from './hokage';

class Comps extends Component {
  render() {
    return (
        <div >
        	<Carousal1/>
          <Nav1/>
          <About/>
          <Clans/>
          <Hokage/>
        </div>
    );
  }
}

export default Comps;
