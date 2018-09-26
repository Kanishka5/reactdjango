import React from 'react';
import TweenMax from 'gsap';
import ScrollMagic from './scrollmagic.js';
import './hover.css';
import $ from 'jquery';

class Hover extends React.Component {


  componentDidMount(){
    $("figure").mouseleave(
      function() {
        $(this).removeClass("hover");
      }
    );
  };
  render() {
    return (
      <div id="bgcolor" >
          <figure class="snip1543">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample108.jpg" alt="sample108" />
            <figcaption>
              <h3>Inverness McKenzie</h3>
              <p>The only skills I have the patience to learn are those that have no real application in life.</p>
            </figcaption>
            <a href="#"></a>
          </figure>
          <figure class="snip1543 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample100.jpg" alt="sample100" />
            <figcaption>
              <h3>Alan Fresco</h3>
              <p>The real fun of living wisely is that you get to be smug about it.</p>
            </figcaption>
            <a href="#"></a>
          </figure>
          <figure class="snip1543"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample101.jpg" alt="sample101" />
            <figcaption>
              <h3>Indigo Violet</h3>
              <p>But Calvin is no kind and loving god! He's one of the old gods! He demands sacrifice! </p>
            </figcaption>
            <a href="#"></a>
          </figure>
      </div>
    );
  }
}

export default Hover;