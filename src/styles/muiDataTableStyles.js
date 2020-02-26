import { createMuiTheme } from '@material-ui/core/styles';
import {green} from './index'

export const theme = createMuiTheme({
//   typography: {
//     useNextVariants: true
// },
    overrides: {
      paper: {
        boxShadow: "none",
        border: "100px solid red",
      },
      MuiTableCell: {
        root: {
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft:15,
          paddingRight:10,
          color:"rgba(0,0,0,.7)",
          "&:first-child": {
            paddingRight: 0,
            paddingLeft:13,
            width:"4%",
          },
          "&:last-child": {
            paddingRight: 0,
            paddingLeft:0,
            width:"2%"
          }
        }
      },
      MUIDataTableBodyCell: {
        root: {
          color: "rgba(0, 0, 0,.6)"
        }
      },
      MUIDataTableHeadCell:{
        root: {
          color: "rgba(0, 0, 0,.6)"
        }
      }

    //   MUIDataTableToolbar: {
    //     root: {
    //       marginRight: 10,
    //     },
    //     titleText: {
    //       color: green[800],
    //     },
    //     icon :{
    //       // padding:10,
    //       // marginRight:10,
    //       color:green[900],
    //       '&:hover': {
    //         color: green[800],
    //       }
    //     },
    //     iconActive: {
    //       backgroundColor: green[800],
    //       color:"#fff",
    //     },
    //   },
    //    MuiInput: {
    //       root: {
    //         color:"rgba(0,0,0,.7)",
    //       },
          
    //     },
    }

  }
  );
