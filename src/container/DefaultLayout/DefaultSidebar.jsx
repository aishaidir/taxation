import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner'
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { styles } from '../../styles/scss/style';
import Media from "react-media";
import { connect } from 'react-redux'
import {
  List, ListItem, ListItemIcon, ListItemText,   MenuIcon,
  classNames, Button, Icon,CssBaseline,
 Drawer, IconButton, Typography, ExpandMore, ExpandLess, NotesIcon,
  Grow
} from '../../mui';
import Nasarawalogo from '../../image/Nasarawalogo.png'
import { Collapse, Slide } from '@material-ui/core'
import { Colors } from '../../styles/themes';
import { fetchUserData } from '../../helpers/account.helper';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';



const Spinner = <Loader type="Puff" color="#f4f4f4"
  height="40"
  width="40" />

const nameLoader = <Loader type="Puff" color={Colors.light}
  height="20"
  width="20" />

class DefaultSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      BusinessName: '',
      isMobile: '',
      sidebarFixed: true,
      openNest: '',
      prevNest: '',
      anchorEl: null,
      };

  }
  
  handleClose=()=>{
    this.setState({
      open: !this.state.open,     
    })
  }


  handleToggleDrawer =() =>{
    this.setState({open:!this.state.open});
  }
    
  toggleHover() {
    this.setState(previousState => {
      return { companySwitchHover: !previousState.companySwitchHover };
    });
  }

  fixSidebar = () => {
    this.setState({ sidebarFixed: !this.state.sidebarFixed })
    this.props.fixSidebar();
  }
  handleChangeBusinessName = (id) => {
    this.setState({ anchorEl: !this.state.anchorEl },
      () => this.props.fetchUserData(id))
  }
  handleProfileMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handlMouseLeave = (e) => { e.target.color = Colors.grey }
  handleClick = (item, index) => {
    if (item.children) {
      this.state.openNest === index ?
        this.setState({ openNest: '' }) :
        this.setState({ openNest: index })
    } else {
      this.props.history.push(item.link);
    }
  }

  onMouseLeave = () => {
    this.setState((prevState) => ({
      openNest: '',
      prevNest: prevState.openNest
    }));
    this.props.handleDrawerClose();
  }

  onMouseEnter = () => {
    this.setState(prevState => ({ openNest: prevState.prevNest }));
    this.props.handleDrawerOpen();
  }

  render() {
    const { classes, open, location, userData, isLoading, Loading,dataError, dataErrorMessage } = this.props;
    const { sidebarFixed, openNest, anchorEl} = this.state

    const menuList = [
      { name: 'Dashboard', icon: <DashboardRoundedIcon color="#ffffff" size={24} />, link: '/dashboard' },
      { name: 'Individual Taxpayers', icon: <PersonRoundedIcon color="#ffffff" size={24} />, link: '/individual-taxpayer' },
      { name: 'Non Individual Taxpayers', icon: <PeopleRoundedIcon color="#ffffff" size={24} />, link: '/nonindividual-taxpayers' },
      { name: 'User Management', icon: <SettingsRoundedIcon color="#ffffff" size={24} />, link: '/user-management' },

    ];
    return (
      <div className={classes.root}>
        <div>
        </div>
        <Media query="(max-width: 992px)" onChange={matches => this.setState({ isMobile: matches })} />
        
        <CssBaseline />
          <Drawer      
          anchor="left"
          open={open}
          onMouseEnter={!sidebarFixed &&  this.onMouseEnter}
          onMouseLeave={!sidebarFixed && this.onMouseLeave}
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.drawerToggle}>
          
            <Grow in={open}>
              <div >
                <Button variant="outlined" onClick={this.handleProfileMenuOpen} color="inherit" className={classes.companyButton}>
                  <Typography variant="h5" id="buizName" className={classes.companyName}>
                    <span><img src={Nasarawalogo} alt ="nasawa logo" style={{ position: "absolute", top: 5, left: 0, width:30, height:30 }}/>
                    </span>Nasarawa state Tax Board</Typography>
                </Button>

              </div>
            </Grow>
            <IconButton onClick={this.fixSidebar} style={{ color: "#fff", position: "absolute", right: 0 }}>
              {sidebarFixed ? <NotesIcon color="inherit" /> : <MenuIcon color="inherit" />}
            </IconButton>
          </div>

          <List >
            {!isLoading ? menuList.map((item, index) => {
              if (item.name === 'SUBSCRIPTION') {
                return (
                  <>
                  <ListItem button className="sidebarBtn" style={{ '&:focus': { outline: "none" } }} onClick={this.handleClose}  key={item.name} >
                      <ListItemIcon style={{ color: "#fff", margin: 5 }}>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />
                      {item.children && open && <ListItemIcon className={classes.nestedIcon}>{openNest === index ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>}
                    </ListItem>
                    <Collapse in={openNest === index} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {
                          item.children && item.children.map((item, index) => (
                            <ListItem button className={classes.nested} onClick={() => this.handleClick(item, index)} selected={location.pathname === item.link}  >
                              <ListItemIcon style={{ color: "#fff", margin: 5 }}>{item.icon}</ListItemIcon>
                              {<ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />}
                            </ListItem>
                          ))
                        }
                      </List>
                    </Collapse>
                  </>
                )
              } else {
                return (
                  <>
                    <ListItem button className="sidebarBtn" style={{ '&:focus': { outline: "none" } }} onClick={() => this.handleClick(item, index)} selected={location.pathname === item.link} key={item.name} >
                      <ListItemIcon style={{ color: "#fff", margin: 5 }}>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />
                      {item.children && open && <ListItemIcon className={classes.nestedIcon}>{openNest === index ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>}
                    </ListItem>
                    <Collapse in={openNest === index} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {
                          item.children && item.children.map((item, index) => (
                            <ListItem button className={classes.nested} onClick={() => this.handleClick(item, index)} selected={location.pathname === item.link}  >
                              <ListItemIcon style={{ color: "#fff", margin: 5 }}>{item.icon}</ListItemIcon>
                              {<ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />}
                            </ListItem>
                          ))
                        }
                      </List>
                    </Collapse>
                  </>
                )
              }
            }) : <div className={classes.sideBarLoader}>{Spinner}</div>}
            {dataError && <h4 className={classes.sideBarErrorText}>{dataErrorMessage}</h4>}
            
          </List>
        </Drawer>
      </div>
      
    );
  }

}
const mapStateToProps = (state) => {
  return {
    userData: state.isAuthenticated.data,
    isLoading: state.isAuthenticated.isLoadingData,
    dataError: state.isAuthenticated.dataError,
    dataErrorMessage: state.isAuthenticated.dataErrorMessage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    fetchUserData: (businessId) => dispatch(fetchUserData(businessId)),
  }
}


DefaultSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles, { withTheme: true })(DefaultSidebar)));