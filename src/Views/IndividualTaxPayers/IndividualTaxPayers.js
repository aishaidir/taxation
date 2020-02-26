import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateBreadcrumb } from '../../actions/breadcrumbAction'
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles, Tooltip, Grid, Paper, TextField, MenuItem } from '@material-ui/core';
import { Colors } from '../../styles/themes';
import Spinner from '../../components/Spinner';

export const styleProps = {
    color: Colors.greenSecondary,
    height: 50,
    width: 50,
    className: 'spinner-background-opt',
}
export const styles = theme => ({
    root: {
        display: 'flex',
        marginTop: 24,
        width: '100%',
        flexDirection: 'column'
    },
    container: {
        display: 'flex',
justifyContent:"flex-end",
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
    resized: {
        height: 40,
        width: '100%',
        color: 'rgba(0, 0, 0, 0.8)',
        // fontSize: 12,
    },

})
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
                width:"10%"
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
    
class IndividualTaxPayers extends Component {
    constructor(props) {
        super(props);
        this.dispatch = props.dispatch
        this.state = {
            rowsPerPage: 10,
            page: 0,
            role: "",
        }
    }
    componentDidMount = () => {
        this.dispatch(updateBreadcrumb({parent:"Individual Taxpayers"})) 
       }
    changePage = (page) => {
        // const { rowsPerPage } = this.state
        // const { id, getEmployeesRequests} = this.props
        // let credentials = {
        //     id,
        //     page: page + 1,
        //     pagesize: rowsPerPage
        // }
        // // getEmployeesRequests(credentials);
        // this.setState({
        //     page: page,
        //     rowsPerPage
        // })
    }
    onChangeRowsPerPage = (numberOfRows) => {
        // const { page } = this.state
        // this.setState({ rowsPerPage: numberOfRows })
        // const { id, getEmployeesRequests} = this.props
        // let credentials = {
        //     id,
        //     pagesize: numberOfRows,
        //     page: page
        // }
        // //  getEmployeesRequests(credentials);
        // this.setState({ rowsPerPage: numberOfRows })
    }
    handleTextChange = event => {
        this.setState({ searchText: event.target.value });
    };
    handleserachIconClick = () => {
        this.setState({ showSearchInput: !this.state.showSearchInput })
    }
    handleSearch = (e) => {
        e.preventDefault()
        const { page, rowsPerPage, searchText } = this.state
        let credentials = {
            pagesize: rowsPerPage,
            page,
            search: searchText,
        }
        // this.props.GetPGInformationUpdateHistory(credentials);
        this.setState({ searchText: searchText });
    }
    handleKeyPress = (event) => {
        const { page, rowsPerPage, searchText } = this.state
        let credentials = {
            pagesize: rowsPerPage,
            page,
            search: searchText,
        }
        if (event.keyCode === 13) {
            //   this.props.GetPGInformationUpdateHistory(credentials);
            this.setState({ searchText: searchText });
        }
    }
    render() {
        const { classes } = this.props;
        const { page, rowsPerPage } = this.state
        const columns = ["S/N","First Name", "Last Name", "Date of Birth", "JTB Tin","Gender","State of Origin", "lga","Phone","State of Residence"];
        const data = [
            [1, "Patrick", "Ogah", "1991-05-05","1025015478","M","Benue","Ifako-Ijaye","07065878906", "Lagos"],
            [2, "Patrick", "Ogah", "1991-05-05","1025015478","M","Benue","Ifako-Ijaye","07065878906", "Lagos"],
            [3, "Patrick", "Ogah", "1991-05-05","1025015478","M","Benue","Ifako-Ijaye","07065878906", "Lagos"],
            [4, "Patrick", "Ogah", "1991-05-05","1025015478","M","Benue","Ifako-Ijaye","07065878906", "Lagos"],
            [5, "Patrick", "Ogah", "1991-05-05","1025015478","M","Benue","Ifako-Ijaye","07065878906", "Lagos"],
            [6, "Patrick", "Ogah", "1991-05-05","1025015478","M","Benue","Ifako-Ijaye","07065878906", "Lagos"],
            [7, "Patrick", "Ogah", "1991-05-05","1025015478","M","Benue","Ifako-Ijaye","07065878906", "Lagos"],
            [8, "Patrick", "Ogah", "1991-05-05","1025015478","M","Benue","Ifako-Ijaye","07065878906", "Lagos"],
            [9, "Patrick", "Ogah", "1991-05-05","1025015478","M","Benue","Ifako-Ijaye","07065878906", "Lagos"],

        ]
        const options = {
            pagination: true,
            filter: false,
            search: false,
            print: false,
            download: false,
            viewColumns: false,
            fixedHeaderOptions: true,
            responsive: 'scrollFullHeight',
            rowsPerPage: rowsPerPage,
            page: page,
            serverSide: true,
            sort: false,
            elevation: 0,
            count: this.props.paging && this.props.paging["total-record"],
            selectableRows: 'none',
            rowsPerPageOptions: [5, 10, 15, 20],
            onTableChange: (action, tableState) => {
                switch (action) {
                    case 'changeRowsPerPage':
                        this.onChangeRowsPerPage(tableState.rowsPerPage)
                        break;
                    case 'changePage':
                        this.changePage(tableState.page);
                        break;
                }
            }
        };

        return (
            <Paper className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <form className={classes.container} noValidate autoComplete="off">
                            <Grid item xs={5}>
                                <TextField
                                    type="search"
                                    placeholder="search"
                                    classes={{ root: classes.textField }}
                                    value={this.state.searchText}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleTextChange}
                                    inputRef={el => (this.searchField = el)}
                                    onKeyUp={this.handleKeyPress}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Tooltip title="Search" aria-label="Search">
                                                    <SearchIcon className={classes.searchBtn} onClick={this.handleSearch} />
                                                </Tooltip>
                                            </InputAdornment>
                                        ),
                                        classes: {
                                            root: classes.resized,
                                            focused: classes.focused,
                                            notchedOutline: classes.notchedOutline
                                        }
                                    }}
                                />
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
                {!this.props.loading ?
                    ( <MuiThemeProvider theme={theme}>
                    <MUIDataTable
                        data={data}
                        columns={columns}
                        options={options}
                    />
                  </MuiThemeProvider> ): <Spinner {...styleProps}></Spinner>
                }

            </Paper>
        )
    }
}

export default connect()(withStyles(styles)(IndividualTaxPayers))
