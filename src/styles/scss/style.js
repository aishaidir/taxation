/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { grey, green } from '../../mui';
import { Fonts, Colors } from '../themes';

const drawerWidth = 300;

export const styles = theme => ({
  root: {
    display: 'flex',
    marginBottom: 8
  },
  content: {
    flexGrow: 1,
    marginTop: '50px',
    padding: 48,
    marginLeft:57,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  contentShift: {
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: drawerWidth
  },
  // appBar: {
  //   // zIndex: theme.zIndex.drawer + 1,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   backgroundColor: "#fff",
  //   color: grey[700],
  //   width: `calc(100% - 59px)`
  // },
  // appBarShift: {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: '#fff',
    color: grey[700],
    width: "calc(100% - 59px)",
    marginLeft: 57,
    boxShadow: "rgba(9, 30, 66, 0.08) 0px 0px 0px 1px, rgba(9, 30, 66, 0.08) 0px 2px 4px 1px",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  grow: {
    flexGrow: 1
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    color: '#ffffff',
    position: 'absolute'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: green[800]
  },
  drawerToggle: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    borderBottom: '1px solid #388e3c',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    color: '#fff'
  },
  drawerHeader: {
    display: 'grid',
    alignItems: 'center',
    padding: '0 8px',
    // ...theme.mixins.toolbar,
    justifyContent: 'center',
    color: '#fff',
    marginBottom: '1em',
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: 49,
    [theme.breakpoints.up('sm')]: {
      width:59
    }
  },
  drawerHeaderClosed: {
    // transform: "scale(0)"
    transform: 'translateX(-100px)'
  },
  sidebarText: {
    color: '#fff',
    fontSize: '14px',
    width: '100%',
    fontFamily: Fonts.primary,
    textTransform: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginLeft:-15,
    textOverflow: 'ellipsis'
  },
  nested: {
    borderLeft: `4px solid ${Colors.light}`,
    paddingLeft: 0
  },
  nestedIcon: {
    position: 'absolute',
    right: 0,
    color: '#fff'
  },
  sideBarLoader: {
    marginTop: '30vh',
    marginLeft: drawerWidth / 2 - 20,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  sideBarErrorText: {
    fontFamily: Fonts.primary,
    margin: 'auto',
    // marginTop:'30vh',
    width: drawerWidth - 20,
    textAlign: 'center'
  },
  companyName: {
    color: Colors.light,
    fontSize: 16,
    marginLeft: 20,
    // marginRight: 20,
    padding:5,
    textTransform:"capitalize"
  },
  companyButton: {
    textAlign: 'center',
    border: 'none',
    outline: 0,
    marginLeft: 15
  },
  // menu: {
  //   width: drawerWidth - 15,
  //   borderRadius: 1
  // }
  profile: {
    [theme.breakpoints.up('sm')]: {
      width: "50%",
      position: "relative",
    },
    width: "60%",
    position: "relative"

  },
  accountIcon: {
    [theme.breakpoints.up('sm')]: {
      fontSize: 40,
      width: 50,
      position: "relative",
      left: "60.22%",
      right: "12.5%",
      top: "20.50%",
      bottom: "12.33%",
      color: "rgba(0, 0, 0, 0.18)",
    },
    fontSize: 22,
    width: 25,
    position: "relative",
    left: "10%",
    top: "20%",
    bottom: 0,
    color: "rgba(0, 0, 0, 0.18)",
  },
  usernameText: {
    [theme.breakpoints.up('sm')]: {
      fontFamily: Fonts.primary,
      fontSize: 16,
      fontWeight: 500,
      color: green[800],
      textTransform: 'none',
      width: 250,
      position: "absolute",
      left: "70%",
      top: 9,
      bottom: 0,

    },
    fontFamily: Fonts.primary,
    textTransform: 'none',
    width: 50,
    position: "absolute",
    left: "28.22%",
    top: 8,
    bottom: 0,
    fontSize: 10,
  },
  userProfileMenu: {
    [theme.breakpoints.up('sm')]: {
      padding: 0,
      position: "relative",
      left: "84.22%",
      top: -15,
      bottom: 0,
      color: "rgba(0, 0, 0,.79)"
    },
    position: "relative",
    left: "45.22%",
    top: -6,
    bottom: 0,
    color: "rgba(0, 0, 0,.79)"
  },
  menu: {
    padding: 5,
    width: 220,
    padding: 10,
    borderRadius: 4,
    position:"absolute",
    top:0,
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff'
    },
    '&:focus': {
      backgroundColor: '#fff'
    }
  },
});
