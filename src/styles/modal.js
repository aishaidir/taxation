import { Colors, Fonts } from "./themes";

export const styles = theme => ({
    paper: {
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      outline: 'none',
      padding:15,
    },

    with:{
        width: '40%',
        padding: 32,
    },
    mobileWidth:{
        width: 320,
        padding: 16,
    },

    submitbtn:{
      padding:10,
      background:Colors.blueSecondary,
      color:Colors.light,
    },
    phone:{
        marginTop:30,
     },
     option:{
      outline:'none',
      cursor:'pointer',
      padding:5,
      paddingLeft:10,
      borderRadius:5,
      '&:hover':{
          backgroundColor:Colors.grey,
          color:Colors.light
      }

     },
     tableRow:{
      height:45,
     },
     closeModal:{
      position:'absolute',
      right:0,
      top:3,
     },
     textfield:{
      margin:8,
        marginTop:10,
          width:'98%',
     },
     selectField:{
      fontSize: 14,
      margin: 4,
      paddingHorizontal:5,
      padding: "0.5em",
      width:'98%',
      marginTop:10,
     },
     selectMenu:{width:160},
     resize:{
      fontSize: 14,
      margin: 4,
      paddingHorizontal:5,
      padding: "0.5em",
      right: '1%'
     },
     label:{
      fontSize: "14px",
         transform: "translate(14px, 12px)",
         marginTop: "2px"
     },
     btn:{
      padding:10,
      justifyContent:'space-around',
      fontFamily:Fonts.primary
     },
     labelStudent:{
      fontSize: "14px",
         transform: "translate(14px, 12px)",
         marginTop: -2,
     },

  submitbtn: {
    padding: 10,
    background: Colors.blueSecondary,
    color: Colors.light
  },
  phone: {
    "label + &": {
      // marginBottom: 10,
    },
    marginTop: 30,
    marginLeft: 8,
    marginRight: 16,
    width: `calc(100% - 0px)`,
    height: 60,
    flexBasis: 200
  },
  option: {
    outline: "none",
    cursor: "pointer",
    padding: 5,
    paddingLeft: 10,
    borderRadius: 5,
    "&:hover": {
      backgroundColor: Colors.grey,
      color: Colors.light
    }
  },
  tableRow: {
    height: 45
  },
  closeModal: {
    position: "absolute",
    right: 0,
    top: 3
  },
  textfield: {
    margin: 8,
    marginTop: 10,
    width: "100%"
  },
  selectField: {
    fontSize: 14,
    margin: 4,
    paddingHorizontal: 5,
    padding: "0.5em",
    width: "100%",
    marginTop: 10
  },
  selectMenu: { width: 160 },
  resize: {
    fontSize: 14,
    margin: 4,
    paddingHorizontal: 5,
    padding: "0.5em"
  },
  label: {
    fontSize: "14px",
    transform: "translate(14px, 12px)",
    marginTop: "2px"
  },
  btn: {
    padding: 10,
    justifyContent: "space-around",
    fontFamily: Fonts.primary
  },
  labelStudent: {
    fontSize: "14px",
    transform: "translate(14px, 12px)",
    marginTop: -2
  }
});
