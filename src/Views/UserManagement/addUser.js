import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux'
import { green } from '../../mui';
import { Button, TextField, Typography, MenuItem, IconButton, FormHelperText, Grid } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import CloseIcon from '@material-ui/icons/Close';
import { styles } from '../../styles/scss/actionStyles'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Colors } from '../../styles/themes';
import Loader from 'react-loader-spinner';
import Snackbars from '../../components/Snackbars';
import Tooltip from '@material-ui/core/Tooltip';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            message: false,
            show: false,
            name: "",
            email: "",
            phone: "",
            role: ""
        }
    }

    handleClickOpen = (e) => {
        this.setState({ anchorEl: e.currentTarget })
    }
    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault()
    }
    handleCloseSnack = () => {
        this.props.refreshAction();
    }
    renderFieldError = (message) => {
        return <Snackbars
            variant="error"
            handleClose={this.handleCloseSnack}
            message={message}
            isOpen={message}
        />
    }
    render() {
        const { classes, isLoading } = this.props
        const open = Boolean(this.state.anchorEl);
        const id = open ? 'simple-popover' : undefined;
        return (
            <div>
                <div>
                    <Tooltip title="Add User" aria-label="add">
                        <Fab
                            aria-label="add"
                            className={classes.addButton}
                            size="medium"
                            // variant="extended"
                            onClick={this.handleClickOpen}>
                            <AddIcon />
                            {/* Add User */}
                        </Fab>
                    </Tooltip>
                </div>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <div>
                        {
                            this.state.message === true ?
                                this.renderFieldError(this.state.employee === "" ? "employee name is required" :
                                    this.state.name === "" ? "Full name is required" :
                                        this.state.email === "" ? "Email is required" :
                                            this.state.phone === "" ? "Phone number is required" :
                                                this.state.role === "" ? "Role is required" : ""
                                ) : null
                        }
                    </div>

                    <div className={classes.root}>
                        <IconButton aria-label="close"
                            className={classes.closeButton}
                            onClick={this.handleClose}>
                            <Tooltip title="close" aria-label="close">
                                <CloseIcon />
                            </Tooltip>
                        </IconButton>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12}>
                                <form className={classes.container} noValidate autoComplete="off">
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <Typography component="h2" style={{
                                            textAlign: "left",
                                            color: green[800],
                                            paddingLeft: "10px",
                                        }} gutterBottom>Add User
                    </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <TextField
                                            name="name"
                                            label="Full Name"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            className={classes.textField}
                                            InputProps={{
                                                className: classes.resized
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                                className: classes.label
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <TextField
                                            name="email"
                                            label='Email'
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            InputProps={{
                                                className: classes.resized
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                                className: classes.label
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <TextField
                                            name="phone"
                                            label='Phone'
                                            value={this.state.phone}
                                            onChange={this.handleChange}
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            InputProps={{
                                                className: classes.resized
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                                className: classes.label
                                            }}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
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
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            className={classes.submitAddButton}
                                            disabled={isLoading}
                                            style={{ backgroundColor: isLoading ? Colors.greenSecondary : '' }}
                                            disableRipple={isLoading}
                                            onClick={this.handleSubmit}
                                        >
                                            <span className='submit-btn'>{isLoading ? <Loader type="ThreeDots"
                                                color="#f4f4f4"
                                                height="15"
                                                width="30" /> : 'Add User'}</span>
                                        </Button>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </div>
                </Popover>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        transferData: state.transferReducer,
        isLoading: state.transferReducer.actionLoading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // addTransferItem: (datas) => dispatch(addTransferItem(datas)),
        // refreshAction: () => dispatch(getRefreshRequest())

    }
}

export default connect()(withStyles(styles)(AddUser));