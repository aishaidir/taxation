import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateBreadcrumb } from '../../actions/breadcrumbAction'
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from '@material-ui/core/InputAdornment';
import { green } from '../../mui';
import { withStyles, Tooltip, Grid, Paper, TextField,Button } from '@material-ui/core';
import { Colors } from '../../styles/themes';
import Spinner from '../../components/Spinner';
import AddTaxPayer from './AddTaxpayer'

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
        justifyContent: "flex-end",
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
    viewmoreBtn:{
        textTransform:"capitalize",
        color: green[800]
    }

})
export const theme = createMuiTheme({
    overrides: {
        paper: {
            boxShadow: "none",
            border: "100px solid red",
        },
        MuiTableCell: {
            root: {
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 15,
                paddingRight: 10,
                color: "rgba(0,0,0,.7)",
                "&:first-child": {
                    paddingRight: 0,
                    paddingLeft: 13,
                    width: "2%",
                },
                "&:last-child": {
                    paddingRight: 0,
                    paddingLeft: 0,
                    width: "2%"
                }
            }
        },
        MUIDataTableBodyCell: {
            root: {
                color: "rgba(0, 0, 0,.6)"
            }
        },
        MUIDataTableHeadCell: {
            root: {
                color: "rgba(0, 0, 0,.6)"
            }
        }
    }

}
);

class NonIndividualTaxPayers extends Component {
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
        this.dispatch(updateBreadcrumb({ parent: "Non Individual Taxpayers" }))
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
    handleButtonClick =()=>{
        window.location = '/nonindividual-taxpayer-profile'
    }
    render() {
        const { classes } = this.props;
        const { page, rowsPerPage } = this.state
        const columns = ["S/N", "Reg. Name", "Trade Name", "Director's Name", "Type", "TIN", "City", "State of Origin", "LGA", "Phone","Status","Date of Registration", "Action"];
        const data = [
            [1, "Mua Communication", "Mua Communication", "Onyeka Ezeuchenne", "Business Name", "1200355782", "Markurdi", "Benue", "Katsina-Ala", "081272831148","Active","2019-06-13",<Button onClick={this.handleButtonClick} color="primary" classes={{root:classes.viewmoreBtn}}>
       View more...
      </Button>],
            [2, "Mua Communication", "Mua Communication", "Onyeka Ezeuchenne", "Business Name", "1200355782", "Markurdi", "Benue", "Katsina-Ala", "081272831148","Active","2019-06-13",<Button onClick={this.handleButtonClick} color="primary" classes={{root:classes.viewmoreBtn}}>
       View more... 
      </Button>],
            [3, "Mua Communication", "Mua Communication", "Onyeka Ezeuchenne", "Business Name", "1200355782", "Markurdi", "Benue", "Katsina-Ala", "081272831148","Active","2019-06-13",<Button onClick={this.handleButtonClick} color="primary" classes={{root:classes.viewmoreBtn}}>
       View more...
      </Button>],
            [4, "Mua Communication", "Mua Communication", "Onyeka Ezeuchenne", "Business Name", "1200355782", "Markurdi", "Benue", "Katsina-Ala", "081272831148","Active","2019-06-13",<Button onClick={this.handleButtonClick} color="primary" classes={{root:classes.viewmoreBtn}}>
       View more...
      </Button>],
            [5, "Mua Communication", "Mua Communication", "Onyeka Ezeuchenne", "Business Name", "1200355782", "Markurdi", "Benue", "Katsina-Ala", "081272831148","Active","2019-06-13",<Button onClick={this.handleButtonClick} color="primary" classes={{root:classes.viewmoreBtn}}>
       View more...
      </Button>],

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
            customToolbar: () => {
                return (
                    <AddTaxPayer />
                )
            },
            onTableChange: (action, tableState) => {
                switch (action) {
                    case 'changeRowsPerPage':
                        this.onChangeRowsPerPage(tableState.rowsPerPage)
                        break;
                    case 'changePage':
                        this.changePage(tableState.page);
                        break;
                        default:{}
                }
            }
        };

        return (
            <Paper className={classes.root}>
                {/* <Grid container spacing={3}>
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
                </Grid> */}
                {!this.props.loading ?
                    (<MuiThemeProvider theme={theme}>
                        <MUIDataTable
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </MuiThemeProvider>) : <Spinner {...styleProps}></Spinner>
                }

            </Paper>
        )
    }
}

export default connect()(withStyles(styles)(NonIndividualTaxPayers))
