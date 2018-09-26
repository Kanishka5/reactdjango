import React from 'react';
import TweenMax from 'gsap';
import ScrollMagic from './scrollmagic.js';
import './hover_cnct.css';
import $ from 'jquery';
import ScrollReveal,{reveal,slideUp} from 'scrollreveal';

class Hover1 extends React.Component {


  componentDidMount(){
    $("figure").mouseleave(
        function () {
          $(this).removeClass("hover");
        }
      );

      var slideUp = {
        distance: '150%',
        origin: 'bottom',
        opacity: null
    };

      ScrollReveal().reveal('.yellow',slideUp,{ delay: 500 });
      ScrollReveal().reveal('figure',slideUp);
      ScrollReveal().reveal('.blue',slideUp,{ delay: 1000 });
  };
  render() {
    return (
      <div id="bgcolor" style={{textAlign:'center',}}>
        <div style={{display: 'inline-block',padding:'50px'}}>
            <figure class="snip0044 yellow" style={{visibility:'hidden'}}>
                <img src="https://www.ccanitd.in/images/Shivam.jpg" alt="sample47"/>
                <h3>Shivam Kumar Jha<br/><h5>CONVENER & HEAD</h5></h3>
        
                <div class="icons">
                    <a href="#"><i class="ion-social-googleplus"></i></a>
                    <a href="#"><i class="ion-social-twitter"></i></a>
                    <a href="#"><i class="ion-social-instagram-outline"></i></a>
                </div>
                <div class="corner"><i class="ion-android-add"></i></div>
            </figure>
            </div>


            <div style={{display: 'inline-block',padding:'50px'}}>
            <figure class="snip0044 red" style={{visibility:'hidden'}}>
                <img src="https://www.ccanitd.in/images/Aaryan.jpg" alt="sample21"/>
                <h3>AARYAN SINGH<br/><h5>HEAD, WEB,DESIGN & CREATIVE TEAM</h5></h3>
                <div class="icons">
                    <a href="#"><i class="ion-social-googleplus"></i></a>
                    <a href="#"><i class="ion-social-twitter"></i></a>
                    <a href="#"><i class="ion-social-instagram-outline"></i></a>
                </div>
                <div class="corner"><i class="ion-android-add"></i></div>
            </figure>
            </div>

            <div style={{display: 'inline-block',padding:'50px'}}>
            <figure class="snip0044 blue" style={{visibility:'hidden'}}>
                <img src="https://www.ccanitd.in/images/Vinesh.jpg" alt="sample17"/>
                <h3>VINESH BATTULA<br/><h5>HEAD, WEB,DESIGN & CREATIVE TEAM</h5></h3>
                <div class="icons">
                    <a href="#"><i class="ion-social-googleplus"></i></a>
                    <a href="#"><i class="ion-social-twitter"></i></a>
                    <a href="#"><i class="ion-social-instagram-outline"></i></a>
                </div>
                <div class="corner"><i class="ion-android-add"></i></div>
            </figure>
            </div>

        <div style={{display: 'inline-block',padding:'50px'}}>
            <figure class="snip0044 yellow" style={{visibility:'hidden'}}>
                <img src="https://www.ccanitd.in/images/Shivam.jpg" alt="sample47"/>
                <h3>Shivam Kumar Jha<br/><h5>CONVENER & HEAD</h5></h3>
        
                <div class="icons">
                    <a href="#"><i class="ion-social-googleplus"></i></a>
                    <a href="#"><i class="ion-social-twitter"></i></a>
                    <a href="#"><i class="ion-social-instagram-outline"></i></a>
                </div>
                <div class="corner"><i class="ion-android-add"></i></div>
            </figure>
            </div>


            <div style={{display: 'inline-block',padding:'50px'}}>
            <figure class="snip0044 red" style={{visibility:'hidden'}}>
                <img src="https://www.ccanitd.in/images/Aaryan.jpg" alt="sample21"/>
                <h3>AARYAN SINGH<br/><h5>HEAD, WEB,DESIGN & CREATIVE TEAM</h5></h3>
                <div class="icons">
                    <a href="#"><i class="ion-social-googleplus"></i></a>
                    <a href="#"><i class="ion-social-twitter"></i></a>
                    <a href="#"><i class="ion-social-instagram-outline"></i></a>
                </div>
                <div class="corner"><i class="ion-android-add"></i></div>
            </figure>
            </div>

            <div style={{display: 'inline-block',padding:'50px'}}>
            <figure class="snip0044 blue" style={{visibility:'hidden'}}>
                <img src="https://www.ccanitd.in/images/Vinesh.jpg" alt="sample17"/>
                <h3>VINESH BATTULA<br/><h5>HEAD, WEB,DESIGN & CREATIVE TEAM</h5></h3>
                <div class="icons">
                    <a href="#"><i class="ion-social-googleplus"></i></a>
                    <a href="#"><i class="ion-social-twitter"></i></a>
                    <a href="#"><i class="ion-social-instagram-outline"></i></a>
                </div>
                <div class="corner"><i class="ion-android-add"></i></div>
            </figure>
            </div>
      </div>
    );
  }
}

export default Hover1;