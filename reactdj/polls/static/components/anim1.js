import React, { Component, Children, PropTypes  } from 'react';
import {Motion, spring} from 'react-motion';


const navStyles = {
  minWidth: '80vw',
  minHeight: '10vh',
  background: '#fff',
  position: 'absolute',
  left: '50%',
  bottom: 24
}

const elem=(
  <div className='container'>
        <Motion {...this.getSpringProps()}>
          {tweenCollection => {
             let styleImage = {
               transform: 'scale(' + tweenCollection.scale + ')',
               opacity: tweenCollection.imageOpacity, 
             };
             let styleTitle = {
                marginTop: tweenCollection.marginTop + '%',
             };
             let styleSubtitle = {
                opacity: tweenCollection.opacity,
             };
            return (
              <div className='subcontainer'>
              <div
                className='containerImage'
                onMouseOver={this.handleHover.bind(null, true)} 
                onMouseOut={this.handleHover.bind(null, false)}>
                <img
                  style={styleImage}
                  src='https://tympanus.net/Development/HoverEffectIdeas/img/13.jpg'
                  className='img' />
                <div className='overlay'>
                  <div className='title' style={styleTitle}>Your title</div>
                  <div className='subtitle' style={styleSubtitle}>
                    <div className='subtitleText'>Your subtitle</div>
                  </div>
                </div>
              </div>
             </div>
                         );
                        }}
                      </Motion>
                    </div>
            );

class Anim1 extends Component {
  constructor() {
    super();
    this.state = {
      isHover: false,
    };
    this.handleHover = this.handleHover.bind(this);
    this.getSpringProps = this.getSpringProps.bind(this);
  }
  handleHover(active) {
    this.setState({isHover: active});
  }
  getSpringProps() {
    return {
      defaultStyle: {
        scale: 1.15,
        marginTop: 25,
        imageOpacity: 0.7,
        opacity: 0,             
      },
      style:{
        scale: spring(this.state.isHover ? 1 : 1.15),
        marginTop: spring(this.state.isHover ? 22 : 25),
        imageOpacity: spring(this.state.isHover ? 0.4 : 0.7),
        opacity: spring(this.state.isHover ? 1 : 0)    
      },
    };
  }
  render() {
    return (
              <elem/>

    );
  }
}

export default Anim1;