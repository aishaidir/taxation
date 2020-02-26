import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Grid, Grow } from '@material-ui/core';
import Slider from '../../components/Slider';
import Authentication from '../Authentication/Authentication';

const styles = {
  card: {
    flexGrow: 1,
    width: 700,
    height: 300,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 18,
    overflow: 'hidden'
  },
  cardMobile: {
    width: 300,
    height: '100%',
    marginTop: 10
  },
  root: {
    flexGrow: 1
  }
};
class WelcomePage extends Component {
  state = {
    checked: true
  };
  render() {
    const { classes } = this.props;
    const { checked } = this.state;
    return (
      <div>
        <Grow
          {...(checked ? { timeout: 1000 } : {})}
          style={{ transformOrigin: '0 0 0' }}
          in={checked}
        >
          <Card className={classes.card}>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <div className="sliderDiv">
                  <h4 className="slider-header">New in Payroll</h4>
                  <div>
                    <Slider />
                  </div>
                </div>
              </Grid>
              <Grid item xs={8}>
                <div className="AuthContainer">
                  <Authentication />
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grow>
      </div>
    );
  }
}

export default withStyles(styles)(WelcomePage);
