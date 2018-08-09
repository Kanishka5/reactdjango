import React,{ Component } from 'react'
import { Carousel  } from 'react-bootstrap';

class Carousal1 extends Component{
  render(){
    return(
          <div>
            <Carousel>
              <Carousel.Item>
                <img width={1900} height={600} alt="900x500" src="https://i1.wp.com/littleanimeblog.com/wp-content/uploads/2017/02/naruto-hinata-the-last.png?fit=3499%2C2029&ssl=1" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={1900} height={600} alt="900x500" src="http://otakukart.com/animeblog/wp-content/uploads/2016/10/cover-6.png" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={1900} height={600} alt="900x500" src="http://www.wallpapermaiden.com/image/2016/07/25/re-zero-kara-hajimeru-isekai-seikatsu-emilia-dress-white-hair-anime-3259-resized.png" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
    );

  }
}


  export default Carousal1;