import React, { Component } from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';



class Clans extends Component{
  render(){
    return(
          <div>
			<Grid>
			<Row className="show-grid">
			    <Col xs={12} md={8}>
			    <h2>Clans</h2>
			      <p>A clan (一族, Ichizoku, Literally meaning: household, clan), in the loosest sense of the term, refers to a family or group of shinobi who form a basic unit of a shinobi village. A majority of these clans were mercenary military forces even before the First Shinobi World War.</p>
			    </Col>
			 </Row>
			  <Row>
			    <Col xs={12} sm={6} md={4}>
			    	<Image height="171" width="180" src="https://vignette.wikia.nocookie.net/naruto/images/a/a8/Hy%C5%ABga_Symbol.svg/revision/latest/scale-to-width-down/70?cb=20150510204349" circle responsive />
			    </Col>
			    <Col xs={12} sm={6} md={4}>
			    	<Image height="171" width="180" src="https://vignette.wikia.nocookie.net/naruto/images/c/c3/Uchiha_Symbol.svg/revision/latest/scale-to-width-down/70?cb=20150323000713" circle responsive />
			    </Col>
			    <Col xs={12} sm={6} md={4}>
			        <Image height="171" width="180" src="https://vignette.wikia.nocookie.net/naruto/images/8/89/Uzumaki_Symbol.svg/revision/latest/scale-to-width-down/70?cb=20180407232103" circle responsive />
			      
			    </Col>
			  </Row>
			</Grid>
          </div>
    );

  }
}

 export default Clans;