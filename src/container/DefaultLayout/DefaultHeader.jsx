import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  AccountCircle,
  Divider
} from '../../mui';
import { styles } from '../../styles/scss/style';
import Media from 'react-media';
import { userLogout } from '../../helpers/authentication.helper';
import { connect } from 'react-redux';
import { green } from '../../mui';
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

class DefaultHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: '',
      anchorEl: null
    };
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleLogout = () => ({});
  render() {
    const { classes, isLoading, userData, sidebarFixed } = this.props;
    const { isMobile } = this.state;
    const { anchorEl } = this.state;
    const { profile } = userData;
    return (
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: isMobile ? false : sidebarFixed
        })}
      >
        <Media
          query="(max-width: 992px)"
          onChange={matches => this.setState({ isMobile: matches })}
        />
        {/* <Toolbar disableGutters={false}>
          <div>
            <Typography
              variant="h6"
              style={{ fontFamily: Fonts.primary }}
              color="inherit"
              noWrap
            >
              {isMobile ? 'Payroll' : 'Payroll'}
            </Typography>
          </div>
          <div className={classes.grow} />
          <Typography
            variant="button"
            color="inherit"
            style={{
              float: 'right',
              fontFamily: Fonts.primary,
              textTransform: 'none'
            }}
            noWrap
          >
            {isMobile ? 'BM' : isLoading ? '' : profile ? profile.name : ''}
          </Typography>
          <IconButton
            aria-owns={anchorEl ? 'material-appbar' : undefined}
            aria-haspopup="true"
            onClick={this.handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar>
              <AccountCircle />
            </Avatar>
          </IconButton>
          <Menu
            id="material-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            style={{ marginTop: 35 }}
            classes={{ paper: classes.menu }}
          >
            <MenuItem onClick={this.handleClose}>
              <Icon color="primary" style={{ marginRight: 10 }}>
                account_circle_outlined
              </Icon>
              Profile
            </MenuItem>
            {/* <MenuItem onClick={this.handleClose}><Icon style={{color:"#388e3c", marginRight:10}} >people</Icon>Accounts
                    </MenuItem> */}
            {/* <Divider />
            <MenuItem onClick={this.props.userLogout}>
              <Icon style={{ color: '#b71c1c', marginRight: 10 }}>
                exit_to_app
              </Icon>
              Logout
            </MenuItem>
          </Menu> */}
        {/* </Toolbar>  */}
        <Toolbar classes={{ root: classes.ToolbarRoot }}>
          <div className={classes.grow} />
            <div className={classes.profile}>
            <AccountCircle className={classes.accountIcon} />
                <Typography
                  variant="h5"
                  color="inherit"
                  classes={{root:classes.usernameText}}
                  noWrap={true}
                >
                Aisha Abulkadir
                </Typography>
                <IconButton
                  aria-owns={anchorEl ? 'material-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  className={classes.userProfileMenu}
                >
                  {anchorEl ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </IconButton>
                <Menu
                  id="material-appbar"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                  classes={{ paper: classes.menu }}
                  autoFocus={false}
                  disableAutoFocusItem={true}
                >
                  <MenuItem onClick={this.handleClose} classes={{ paper: classes.menuItem }}>
                    <PersonOutlineSharpIcon style={{ marginRight: 10, color: green[900] }} />
                    Profile
              </MenuItem>
                  <Divider />
                  <MenuItem onClick={this.props.userLogout}>
                    <ExitToAppSharpIcon style={{ marginRight: 15, color: "rgb(183, 28, 28)" }} />
                    Logout
              </MenuItem>
                </Menu>
            </div>
          </Toolbar>

      </AppBar>
    );
  }
}

DefaultHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    userData: state.isAuthenticated.data,
    isLoading: state.isAuthenticated.isLoadingData,
    dataError: state.isAuthenticated.dataError,
    dataErrorMessage: state.isAuthenticated.dataErrorMessage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => dispatch(userLogout())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(DefaultHeader));
