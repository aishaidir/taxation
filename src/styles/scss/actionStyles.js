import { green, grey } from '@material-ui/core/colors';

export const styles = theme => ({
  root: {
    width: 410,
  },
  formWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 50,
    paddingRight: 50,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: "10px 20px",
  },
  textField: {
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      paddingRight: 20,
      marginLeft: 8,
      marginRight: 8,
      textTransform: 'capitalize',
    },
    width: '100%',
    paddingRight: 20,
    marginLeft: 8,
    marginRight: 8,
    textTransform: 'capitalize',
  },
  label: {
    // fontSize:14,
    color: 'rgba(0, 0, 0, 0.8)'
  },
  resized: {
    height: 35,
    width: '100%',
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 12,
  },
  resizComment: {
    width: '100%',
    height: 45,
    color: 'rgba(0, 0, 0, 0.8) !important',
    fontSize: 10,
  },
  FormHelperText: {
    color: green[900],
    marginTop: '-0.5em',
    float: 'right',
    fontSize: 12,
    marginRight: 12,
  },
  editIcons: {
    marginLeft: 20
  },
  closeBtn: {
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      top: 0,
      right: 6,
      color: '#fff',
      cursor: 'pointer'
    },
    position: 'absolute',
    top: 0,
    right: 6,
    color: '#fff',
    cursor: 'pointer'
  },

  closeButton: {
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      top: 0,
      right: 6,
      color: 'red',
      cursor: 'pointer'
    },
    position: 'absolute',
    top: 0,
    right: 6,
    color: 'red',
    cursor: 'pointer'
  },

  addButton: {
    // zIndex: 200,
    position: "relative",
    top: 10,
    left: 320,
    // float: 'right',
    textTransform: "capitalize",
    // width: "100%",
    backgroundColor: green[800],
    color: '#fff',
    '&:hover': {
      backgroundColor: green[700],
    }
  },
  button: {
    float: 'right',
    position: 'relative',
    margin: 4,
    backgroundColor: green[800],
    color: 'white',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: "#fff",
      color: green[800],
    },
    borderRadius: 5
  },
  headerRoot: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: green[800],
    color: '#fff',
    width: 410,
    height: 50,
    marginBottom: 20
  },
  addheaderRoot: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: 410,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    color: green[800],
  },
  addHeader: {
    color: green[800],
    marginLeft: 12,
    marginBottom: 0,
    textTransform: 'capitalize',
    fontSize: 16
  },
  addIconButtons: {
    marginLeft: 180,
    marginBottom: 0,
    color: 'red',
  },
  IconButtons: {
    padding: 3,
    marginLeft: 230,
    marginBottom: 0,
    '&:hover': {
      color: 'white',
    },
  },
  closeIcon: {
    color: '#fff',
    fontSize: 24,
    '&:hover': {
      color: green[800],
    },
  },
  fieldWrappers: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  Fields: {
    width: 180,
  },
  Fields1: {
    width: 180,
    marginLeft: 10
  },
  fieldSizes: {
    height: 40,
  },
  emailToolTip: {
    background: green[800]
  },
  emailHeight: {
    marginTop: -1,
    height: 4,
    lineHeight: 2,
    position: 'absolute',
  },
  textFields: {
    width: 370,
  },
  currentDesign: {
    fontSize: 13,
    marginLeft: 5,
    color: green[800]
  },
  currentDesigBox: {
    width: 370,
    marginBottom: 0,
    marginTop: 0,
  },
  menuEmails: {
    // margin: 0,
    // fontSize: 11  ,
    // color: green[800],
    // paddingTop: 50,
    color: green[900],
    marginTop: 9,
    float: 'right',
    fontSize: 12,
  },
  buttonBox: {
    width: 410,
  },
  rippleText: {
    fontSize: 16,
    color: 'white',
    width: 100,
  },
  submitButton: {
    marginLeft: 290,
    marginBottom: 20,
    marginTop: 15,
    width: 100,
    backgroundColor: green[800],
    borderRadius: 4,
    '&:hover': {
      backgroundColor: green[700],
      color: 'white',
    }
  },
  submitAddButton: {
    [theme.breakpoints.up('sm')]: {
      backgroundColor: green[800],
      color: 'rgba(255, 255, 255, 0.8)',
      textTransform: 'capitalize',
      marginTop: 15,
      marginBottom: 15,
      display: 'flex',
      margin: "0 auto",
      width: "97%",
      height: 45,
      '&:hover': {
        backgroundColor: green[700],
        color: 'rgba(255, 255, 255)',
      }
    },
    backgroundColor: green[800],
    color: 'rgba(255, 255, 255, 0.8)',
    textTransform: 'capitalize',
    marginTop: 15,
    marginBottom: 15,
    padding: 5,
    display: 'flex',
    width: '100%',
    height: 45,
    '&:hover': {
      backgroundColor: green[700],
      color: 'rgba(255, 255, 255)',
    }
  },

  actionButton: {
    boxShadow: 'none',
    width: 120,
    height: 50,
    textTransform: 'capitalize',
    color: green[800],
    backgroundColor: "#fff",
    '&:hover': {
      backgroundColor: "#fff",
    },
    '&:focus': {
      backgroundColor: "#fff",
    }
  },
  btnLabel: {
    width: "100%",
  },
  editIcons: {
    color: green[900],
  },
  ListItemText: {
    color: green[900],
  },
  editHeader: {
    color: green[800],
    marginRight: 150,
    textTransform: 'capitalize',
    fontSize: 14
  },
  FormHelper: {
    color: 'red'
  }
  
});
 export const deleteStyles = (theme) =>({
  root: {
    width: 380,
  },
  formWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: 380,
    height: 45,
    backgroundColor:green[800]
  },
  rippleText: {
    fontSize: 16,
    color: 'white',
    width: 100,
  },
  delete: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 15,
    marginTop: 8,
    textTransform: 'capitalize',
  },
  closeIcon: {
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      top: 8,
      right: 15,
      color: '#fff',
       cursor: 'pointer'
    },
    position: 'absolute',
    top: 0,
    right: 6,
    color: 'red',
    cursor: 'pointer'
  },
  button: {
    boxShadow: 'none',
    width: 120,
    height: 50,
    textTransform: 'capitalize',
    backgroundColor: "#fff",
    '&:hover': {
      backgroundColor: "#fff",
    },
    '&:focus': {
      backgroundColor: "#fff",
    }
  },
  btnLabel: {
    width: "100%",
    },
  deleteIcons: {
    color: "#de0a0a",
  },
  ListItemText: {
    color: "#de0a0a",
  },
  header: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    fontSize: 16
  },
  deleteButtonBox: {
    marginTop: 15,
    width: 360,
  },
  cancelButton: {
    marginLeft: 150,
    marginBottom: 15,
    width: 100,
    borderRadius: 4,
    color: '#000',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: grey[100],
      color: '#000',
    }
  },
  submitButton: {
    marginLeft: 10,
    marginBottom: 15,
    width: 100,
    borderRadius: 4,
    backgroundColor: green[800],
    color: '#fff',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: green[700],
      color: '#fff',
    }
  },
  divider: {
    padding: 1,
    backgroundColor: grey[100],
    width: "100%"
  }
 })