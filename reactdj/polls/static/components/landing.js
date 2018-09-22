
import React, { Component } from 'react';
import TweenMax from 'gsap';
import ScrollMagic from './scrollmagic.js';
import SmoothScrollbar from 'smooth-scrollbar';

class Landing extends Component {
    componentDidMount() {
        var controller= new ScrollMagic.Controller();
        var tween = TweenMax.to(".img", 1, {backgroundColor:"black", scale:0.8, ease: Linear.easeNone});

        var scene = new ScrollMagic.Scene({
            offset:50 ,
            duration: 300,
            })
                .setTween(tween)
                .setPin(".img")
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

                                var scrollbar = SmoothScrollbar.init(document.querySelector('.img'))

                                // add listener to refresh the scene manually
                                scrollbar.addListener(() => {
                                  scene.refresh()
                                })
    };



    render() {

        const style2={
            position: 'absolute',
            top: '50.5%',
            left: '51%',
            transform: 'translate(-50%, -50%)',
            fontSize:'50px',
        };

        const style22={
            position: 'absolute',
            top: '50.5%',
            left: '43.5%',
            transform: 'translate(-50%, -50%)',
            fontSize:'50px',
        };
        
        const style4={
            float:'left',
            textAlign:'center',
            position:'relative',
            color:'	#AFEEEE',
        };

        const style3={
            position: 'absolute',
            top: '50%',
            left: '35%',
            transform: 'translate(-50%, -45%)',
            fontSize:'50px',
                
        };

        const style33={
            position: 'absolute',
            top: '50%',
            left: '27%',
            transform: 'translate(-50%, -45%)',
            fontSize:'50px',
                
        };

        const style1={
            position: 'absolute',
            top: '50.8%',
            left: '67%',
            transform: 'translate(-50%, -55%)',
            fontSize:'50px',
                
        };

        const style11={
            position: 'absolute',
            top: '50.8%',
            left: '60%',
            transform: 'translate(-50%, -55%)',
            fontSize:'50px',
                
        };


        const style5={
            width:'100%',
            heigth:'100%',
            margin:'0px',
        };


        return (
            <div className="img" style={style4} >
                <img style={style5} src="https://www.ccanitd.in/images/background/LandingImage.jpg"/>
                <div className="center" style={style33}><b>C</b></div>
                <div className="center1"  style={style3}><b>enter fo</b>r</div>
                <div className="center"  style={style22}><b>C</b></div>
                <div className="center1"  style={style2}><b>ognitive</b></div>
                <div className="center"  style={style11}><b>A</b></div>
                <div className="center1"  style={style1}><b>ctivites</b></div>
            </div>
        );
    }
};export default Landing;