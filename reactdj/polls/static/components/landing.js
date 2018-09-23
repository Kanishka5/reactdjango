
import React, { Component } from 'react';
import TweenMax,{Linear} from 'gsap';
import ScrollMagic from './scrollmagic.js';
import SmoothScroll from 'smooth-scroll';

class Landing extends Component {
    componentDidMount() {
        var controller= new ScrollMagic.Controller();
        var tween = TweenMax.to(".img", 1, {backgroundColor:"black", scale:0.8, ease: Linear.easeNone});

        var scene = new ScrollMagic.Scene({
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
                        var tween = TweenMax.to(".center", 1, { scale:4,color:"red",x:80,ease: Linear.easeNone});
                
                        var scene = new ScrollMagic.Scene({
                            offset:50 ,
                            duration: 300,
                            })
                                .setTween(tween)
                                .addTo(controller);



                                var scroll = new SmoothScroll();
                                var anchor = document.querySelector('.image');
                                scroll.animateScroll(anchor);

    };



    render() {

        const style2={
            float:'left',
            fontSize:'50px',
        };

        const style22={
            float:'left',
            fontSize:'50px',
        };
        
        const style4={
            textAlign:'center',
            position:'relative',
            color:'	#AFEEEE',
        };

        const style3={
            float:'left',
            fontSize:'50px',
                
        };

        const style33={
            float:'left',
            fontSize:'50px',
                
        };

        const style1={
            float:'left',
            fontSize:'50px',
                
        };

        const style11={
            float:'left',
            fontSize:'50px',
                
        };


        const style5={
            width:'100%',
            heigth:'100%',
            margin:'0px',
        };

        const styletext={
                position:'absolute',
                top:'50%',
                left:'50%',
                transform:'translate(-50%,-50%)',
        }


        return (
            <div className="img" style={style4} >
                <img className="image" style={style5} src="https://www.ccanitd.in/images/background/LandingImage.jpg"/>
                <div classname="text" style={styletext}>
                    <div className="center" style={style33}><b>C</b></div>
                    <div className="center1"  style={style3}><b>enter fo</b>r</div>
                    <div className="center"  style={style22}><b>C</b></div>
                    <div className="center1"  style={style2}><b>ognitive</b></div>
                    <div style={style1}>
                    <div className="center"  style={style11}><b>A</b></div>
                    <div className="center1"  style={style1}><b>ctivites</b></div>
                    </div>

                </div>
            </div>
        );
    }
};export default Landing;