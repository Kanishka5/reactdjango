import React from 'react';
import TweenMax from 'gsap';
import ScrollMagic from './scrollmagic.js';


var divStyle = {
  padding: "20px",
  margin: "20px",
  fontSize: "20px",
  textAlign: "center"
};

class About extends React.Component {
  render() {
    return (
      <div id="scene" style={divStyle}>
          <div>
						<h5>CCA, Centre for Cognitive Activities, <br/>is the focal point where convergence of all technical and<br/> scientific endeavours of the students materialises. As the technical gymkhana of the institute,<br/> this club is the revolution which bridges the gap between knowledge <br/>and application. Bulk of the extracurricular activities held in the<br/> college all the year round are organised by the CCA , with the objective<br/> of probing the dark recesses of human mind so that the grey cells are stimulated<br/> to create , conceptualise and evolve, triggering a rebellion of the new age mind against baseless conventions and meek acceptance.</h5>
      </div>
      </div>
    );
  }
}

export default About;