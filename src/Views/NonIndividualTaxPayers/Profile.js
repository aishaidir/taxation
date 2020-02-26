import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateBreadcrumb } from '../../actions/breadcrumbAction'
import { withStyles, Button, Tabs,Tab, Typography,Grid, Paper, Avatar, TextField } from '@material-ui/core';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';
import { green } from '../../mui';
import Box from '@material-ui/core/Box';
import WorkSharpIcon from '@material-ui/icons/WorkSharp';
import CallSharpIcon from '@material-ui/icons/CallSharp';   
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

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
    gobackBtn: {
        fontSize: 13,
        fontWeight: "bolder",
        textTransform: "capitalize",
        color: "#000",
        padding: 15
    },
    avatar: {
        display:"flex",
        margin:"0 auto",
        width: 60,
        height:60,
    },
    uploadBtn:{
        display:"flex",
        width: 170,
        margin:"0 auto",
        marginTop: 15,
        textTransform:"capitalize",
        background: green[800],
        color:"#fff",
        "&:hover":{
            background: green[700],
            color:"#fff",
        }
    },
    tabRoot: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
        display: 'flex',
        // height: 224,
        textTransform:"capitalize",
      },
      tabs: {
          width:"100%",
          textTransform:"capitalize",
        // borderRight: `8px solid ${theme.palette.divider}`,
      },
      tabsIndicator:{
        borderLeft:"4px solid yellow",

      },
      selected:{
        backgroundColor:"yellow",

    },
      wrapper:{
          display:"contents",
          textTransform:"capitalize",
      }
})
class Profile extends Component {
    constructor(props) {
        super(props);
        this.dispatch = props.dispatch
        this.state = {
            value: 0,
          }
          this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount = () => {
        this.dispatch(updateBreadcrumb({ parent: "Non Individual Taxpayers", child: "Profile" }))
    }
    handleChange = (event, value) => {
        this.setState({ value });
      };
    handleButtonClick = () => {
        window.location = '/nonindividual-taxpayers'
    }
    render() {
        const { classes } = this.props
        const { value } = this.state
        return (
            <div className={classes.root}>
                <Button onClick={this.handleButtonClick} color="primary" classes={{ root: classes.gobackBtn }}> <ArrowBackIosSharpIcon fontSize="small" style={{fontSize:13,marginLeft:20}} /> Go back</Button>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Grid item xs={12}>
                                <Avatar className={classes.avatar} sizes="large"> M </Avatar>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    component="label"
                                    className={classes.uploadBtn}
                                >
                                  <ArrowUpwardSharpIcon fontSize="small" /> Upload Picture
                                   <TextField
                                        type="file"
                                        style={{ display: "none" }}
                                    />
                                </Button>
                            </Grid>
              <Grid item xs={12}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={this.handleChange}
        className={classes.tabs}
        classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        TabIndicatorProps={{
            borderLeft:"10px solid red"
        }}
      >
           <Tab icon ={<WorkSharpIcon style={{marginRight:10}} />} label="Company Profile" {...a11yProps(0)} classes={{wrapper:classes.wrapper}} />
        <Tab icon ={<CallSharpIcon  style={{marginRight:10}} />} label="Contact Details" {...a11yProps(1)} classes={{wrapper:classes.wrapper} }/>
        <Tab icon ={<WorkSharpIcon  style={{marginRight:10}} />} label="Tax Details" {...a11yProps(2)} classes={{wrapper:classes.wrapper}} />
        <Tab icon ={<WorkSharpIcon  style={{marginRight:10}} />} label="Tax Asset" {...a11yProps(3)} classes={{wrapper:classes.wrapper}} />
      </Tabs>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
    <TabPanel value={value} index={0}>
       Company Profile
      </TabPanel>
      <TabPanel value={value} index={1}>
      Contact Deatils
      </TabPanel>
      <TabPanel value={value} index={2}>
       Tax Details
      </TabPanel>
      <TabPanel value={value} index={3}>
        Tax Assets
      </TabPanel>
                        </Paper>
                    </Grid>
{/* </div> */}
                </Grid>
            </div>

        )
    }
}

export default connect()(withStyles(styles)(Profile))
