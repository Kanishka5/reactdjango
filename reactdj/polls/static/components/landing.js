
import React, { Component } from 'react';
import TweenMax from 'gsap';
import ScrollMagic from './scrollmagic.js';

class Landing extends Component {
    componentDidMount() {
        var controller= new ScrollMagic.Controller();
        var tween = TweenMax.to(".img", 1, {backgroundColor:"black", scale:0.4, ease: Linear.easeNone});

        var scene = new ScrollMagic.Scene({
            offset:50 ,
            duration: 300,
            })
                .setTween(tween)
                .addTo(controller);
                            


                var controller= new ScrollMagic.Controller();
                var tween = TweenMax.to(".center1", 1, {scale:0, ease: Linear.easeNone});
        
                var scene = new ScrollMagic.Scene({
                    offset:50 ,
                    duration: 300,
                    })
                        .setTween(tween)
                        .addTo(controller);  
                                                
                                            
                        var controller= new ScrollMagic.Controller();
                        var tween = TweenMax.to(".center", 1, {color:"red", scale:4, ease: Linear.easeNone});
                
                        var scene = new ScrollMagic.Scene({
                            offset:50 ,
                            duration: 300,
                            })
                                .setTween(tween)
                                .addTo(controller);
    };



    render() {

        const style2={
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        };

        const style22={
            position: 'absolute',
            top: '50%',
            left: '48.2%',
            transform: 'translate(-50%, -50%)',
        };
        
        const style4={
            float:'left',
            textAlign:'center',
            position:'relative',
        };

        const style3={
            position: 'absolute',
            top: '50%',
            left: '45%',
            transform: 'translate(-50%, -45%)',
                
        };

        const style33={
            position: 'absolute',
            top: '50%',
            left: '43.2%',
            transform: 'translate(-50%, -45%)',
                
        };

        const style1={
            position: 'absolute',
            top: '50%',
            left: '55%',
            transform: 'translate(-50%, -55%)',
                
        };

        const style11={
            position: 'absolute',
            top: '50%',
            left: '53.5%',
            transform: 'translate(-50%, -55%)',
                
        };

        return (
            <div className="img" style={style4} >
                <img src="https://www.ccanitd.in/images/background/LandingImage.jpg"/>
                <div className="center" style={style33}><b>C</b></div>
                <div className="center1"  style={style3}>enter for</div>
                <div className="center"  style={style22}><b>C</b></div>
                <div className="center1"  style={style2}>ognitive</div>
                <div className="center"  style={style11}><b>A</b></div>
                <div className="center1"  style={style1}>ctivites</div>
            </div>
        );
    }
};export default Landing;