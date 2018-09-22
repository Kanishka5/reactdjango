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

class Anim1 extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  render() {
    const { isOpen } = this.state
    const springConfig = [300, 30]
    
    return(
      <Motion
        style={{
          scale: spring(isOpen ? 0.90 : 1, springConfig),
          y: spring(isOpen ? -100 : 0),
          opacity: spring(isOpen ? 1 : 0)
        }}
      >
        {({scale, y, opacity}) =>
          <main>
            <div
              onClick={() => this.setState({isOpen: !isOpen})}
              style={{
                width: '100%',
                height: '100vh',
                background: '#b4da55',
                transform: `scale(${scale})`
              }}
            />
            <nav
              style={{
                navStyles,
                transform: `translate(-50%, ${y}%)`,
                opacity
              }}
            >
            </nav>
          </main>
        }
      </Motion>
    )
  }
}
export default Anim1;