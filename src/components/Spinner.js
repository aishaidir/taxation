import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = { timePassed: false };
  }

  static defaultProps = {
    color: '#388e3c',
    width: '60',
    height: '60',
    className: ''
  };

  render() {
    const { className, color, width, height } = this.props;
    return (
      <div className={`spinner-container ${className}`}>
        <div className="loader">
          <Loader type="TailSpin" color={color} height={60} width={60} />
        </div>
        {this.props.text ? <p>{this.props.text}</p> : null}
      </div>
    );
  }
}

export default Spinner;
