import React from 'react';
import TweenMax,{Quart} from 'gsap';
import $ from 'jquery';
import './cells_hover.css';

class Hovercell extends React.Component {
  render() {
    return (  
      <div>
        <div class="wrapper">
          <section class="sec01" style={{transform:'translatey(20px)'}} >
            <div style={{height:'20em',width:'2em'}}></div>
          </section>
          <section class="sec02">
          <div style={{height:'20em',width:'2em'}}></div>
          </section>
          <section class="sec03"style={{transform:'translatey(20px)'}}>
            <div style={{height:'20em',width:'2em'}}></div>
          </section>   
          <section class="sec04">
            <div style={{height:'20em',width:'2em'}}></div>
          </section> 
          <section class="sec05"style={{transform:'translatey(20px)'}}>
            <div style={{height:'20em',width:'2em'}}></div>
          </section>        

        </div>
      </div>       
    ); 
  }
}
export default Hovercell;