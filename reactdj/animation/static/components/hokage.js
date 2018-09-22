import React, { Component } from 'react';
import {Grid, Row, Col,Thumbnail} from 'react-bootstrap';

class Hokage extends Component{
  render(){
    return(
          <div>
          
			<Grid>
				<Row className="show-grid">
			    <Col xs={12} md={8}>
			    <h1>The Hokages</h1>
			    </Col>
			 </Row>
			  <Row>
			    <Col xs={6} md={3}>
			      <Thumbnail href="#" alt="171x180" height="171" width="180" src="https://vignette.wikia.nocookie.net/naruto/images/3/30/Hokage_Hashirama.png/revision/latest?cb=20140220125441" />
			    </Col>
			    <Col xs={6} md={3}>
			      <Thumbnail href="#" alt="171x180" height="171" width="180" src="https://vignette.wikia.nocookie.net/naruto/images/e/e4/Hiruzen_Sarutobi.png/revision/latest/scale-to-width-down/180?cb=20160125204719" />
			    </Col>
			    <Col xs={6} md={3}>
			      <Thumbnail href="#" alt="171x180" height="171" width="180" src="https://vignette.wikia.nocookie.net/naruto/images/1/11/Hokage_Minato.png/revision/latest/scale-to-width-down/180?cb=20140206124856" />
			    </Col>
			     <Col xs={6} md={3}>
			      <Thumbnail href="#" alt="171x180" height="171" width="180" src="https://vignette.wikia.nocookie.net/naruto/images/a/aa/Tsunade_as_Hokage.PNG/revision/latest/scale-to-width-down/180?cb=20150201183644" />
			    </Col>
			    <Col xs={6} md={3}>
			      <Thumbnail href="#" alt="171x180" height="171" width="180" src="https://vignette.wikia.nocookie.net/naruto/images/9/90/Sixth_Hokage_Candidate.png/revision/latest/scale-to-width-down/180?cb=20161008194459" />
			    </Col>
			    <Col xs={6} md={3}>
			      <Thumbnail href="#" alt="171x180" height="171" width="180" src="https://vignette.wikia.nocookie.net/naruto/images/3/35/Sixth_hokage.png/revision/latest/scale-to-width-down/180?cb=20170216154035" />
			    </Col>
			    <Col xs={6} md={3}>
			      <Thumbnail href="#" alt="171x180" height="171" width="180" src="https://vignette.wikia.nocookie.net/naruto/images/5/57/Naruto_Boruto_Movie.png/revision/latest/scale-to-width-down/180?cb=20150523004912" />
			    </Col>
			  </Row>
			</Grid>
          </div>
    );

  }
}


  export default Hokage;