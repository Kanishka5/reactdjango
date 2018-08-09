import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class About extends Component{
  render(){
    return(
          <div>
			<Grid>
			  <Row className="show-grid">
			    <Col xs={12} md={8}>
			    <h2>Naruto Shippūden</h2>
			      <p>More than two years have passed since the most recent adventures in the Hidden Leaf Village, ample time for ninja wannabe Naruto Uzumaki to have developed skills worthy of recognition and respect. The hyperactive youngster has trained extensively with Jiraiya-sama and returned to Konoha to reunite with friends and, perhaps, partake in more pranks than schoolwork. But Naruto is more determined than ever to become the greatest ninja, and his hard-earned improvements are put to the ultimate test against newer, stronger enemies. "Naruto: Shippuden" is adapted from Part II of the "Naruto" comic book series by Masashi Kishimoto.</p>
			    </Col>
			  </Row>
			</Grid>
          </div>
    );

  }
}


  export default About;