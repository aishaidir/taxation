import React, { Component } from 'react';
import WelcomePage from './WelcomePage';

export class WelcomeContainer extends Component {
  render() {
    return (
      <div className="container">
        <WelcomePage />
        <div>
          <p className="welcome-footer">
            Powered By
            <span>STETiS LTD</span>
          </p>
        </div>
      </div>
    );
  }
}

export default WelcomeContainer;
