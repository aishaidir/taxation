import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBreadcrumb } from '../../actions/breadcrumbAction'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IndividualChart from './IndividualChart'
import NonIndividualChart from './NonIndividualChart'

export const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
})

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.dispatch = props.dispatch
    }
    componentDidMount = () => {
        this.dispatch(updateBreadcrumb({ parent: "Dashboard" }))
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <div><h4>Non-Individual Taxpayers</h4>
                                <h2 style={{ fontWeight: "bolder" }}>80,008</h2>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <div><h4>Individual Taxpayers</h4>
                                <h2 style={{ fontWeight: "bolder" }}>700,008</h2>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <div><h4> Non-Individual (Today)</h4>
                                <h2 style={{ fontWeight: "bolder" }}>208</h2>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <div><h4>Individual (Today)</h4>
                                <h2 style={{ fontWeight: "bolder" }}>2,008</h2>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <IndividualChart />
                         </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <NonIndividualChart />
                       </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default connect()(withStyles(styles)(Dashboard))