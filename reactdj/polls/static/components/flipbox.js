import React, { Component, Children, PropTypes } from 'react';
import {Motion, spring} from 'react-motion';

class DashboardCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rotate: 0
    }
  }
  
  render() {
    const { rotate } = this.state
    return (
      <Motion style={{y: spring(rotate)}}>
        {({ y }) =>
          <div
            className="dashboard-card"
            style={{transform: `rotateY(${y}deg)`}}
            onClick={() => this.setState({rotate: rotate + 180 })}
            onRest={() => {
              if (this.state.rotate > 360) {
                this.setState({ rotate: 0 })
              }
            }}
          >
            <div className="dashboard-card-front">
              Front
            </div>
            <div className="dashboard-card-back">
              Back
            </div>
          </div>
        }
      </Motion>
    )
  }
}
export default DashboardCard;