import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateBreadcrumb } from '../../actions/breadcrumbAction'
import MUIDataTable from "mui-datatables";
import CallOut from '../../components/CallOut/CallOut';
import {theme} from  '../../styles/muiDataTableStyles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles, Tooltip, Grid, Paper, TextField, MenuItem } from '@material-ui/core';
import { Colors } from '../../styles/themes';
import Spinner from '../../components/Spinner';
import AddUser from './addUser'
import EditUser from './EditUser'
import DeleteUser from './DeleteUser'

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

class UserManagement extends Component {
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
        this.dispatch(updateBreadcrumb({ parent: "User Management" }))
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
        const columns = ["S/N","Name", "Email", "Role", "Action"];
        const data = [
            [1, "Hamisu L. Ahmed", "lahamisuahmed@gmail.com", "Super Admin", <CallOut TopAction={<EditUser />} BottomAction={<DeleteUser  />} />],
            [2, "Shamsudeen Abubakar", "shamsudeenabubakar59@gmail.com", "Admin", <CallOut TopAction={<EditUser />} BottomAction={<DeleteUser  />} />],
            [3, "Shams M. Abubaka", "deensisters.dev@gmail.com", "Observer", <CallOut TopAction={<EditUser />} BottomAction={<DeleteUser  />}/>],
            [4, "Umar Umar", "omar@mail.com", "Staffer",<CallOut TopAction={<EditUser />} BottomAction={<DeleteUser  />} />],
            [5, "Shamsu Sani", "shamsu951@rocketmail.com", "Staffer", <CallOut TopAction={<EditUser />} BottomAction={<DeleteUser  />}
        />],
            [6, "Umar A. Mohammed", "butterboi35@gmail.com", "Admin",
             <CallOut
            TopAction={<EditUser />}
            BottomAction={<DeleteUser  />}
        />
    ],


        ];
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
                            <Grid item xs={3}>
                                <TextField
                                    select
                                    name="role"
                                    label="Select Role"
                                    value={this.state.transferdate}
                                    onChange={this.handleChange}
                                    className={classes.textField}
                                    variant="outlined"
                                    focused={true}
                                    margin="normal"
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    InputProps={{
                                        className: classes.resized
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                        className: classes.label
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        <em>Role</em>
                                    </MenuItem>
                                    <MenuItem value="Super Admin">Super Admin</MenuItem>
                                    <MenuItem value="Admin">Admin</MenuItem>
                                    <MenuItem value="Observer">Observer</MenuItem>
                                    <MenuItem value="Observer">Staffer</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={2}>
                            <AddUser />
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

export default connect()(withStyles(styles)(UserManagement))
