import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from "@material-ui/core/styles";
import { Button, TextField, Typography, MenuItem, Grid, IconButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import { styles } from '../../styles/scss/actionStyles'
import Tooltip from '@material-ui/core/Tooltip';
// import { editTransferPage } from '../../../helpers/Transfer'
import MessageCard from '../../components/MessageCard'
import { Colors } from '../../styles/themes';
import Loader from 'react-loader-spinner';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Lawal Hamisu Ahmed",
            email: "lahamisuahmed@gmail.com",
            phone: "08106931300",
            role: "Super Admin",
            open: false,
            message: false,
            show: false,
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true,
        })
    }
    handleClose = () => {
        this.setState({
            open: false,
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    renderFieldError = (message) => {
        return <MessageCard type="error"
            Message={message} />
    }

    render() {
        const {isLoading, classes } = this.props
        return (
            <div>
                <Button
                    variant="contained"
                    classes={{ root: classes.actionButton, label: classes.btnLabel }}
                    onClick={this.handleClickOpen}
                >
                    <EditSharpIcon fontSize="small" className={classes.editIcons} />
                    <ListItemText primary="Edit" classes={{ primary: classes.ListItemText }} />
                </Button>
                <Dialog
                    open={this.state.open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    onClose={this.handleClose}
                >
                    <div>{this.state.message === true ?
                        this.renderFieldError(
                            this.state.name === "" ? "Full name is required" :
                                this.state.email === "" ? "Email is required" :
                                    this.state.phone === "" ? "phone number is required" :
                                        this.state.role === "" ? "role is required" : ""
                        ) : null}</div>
                    <div className={classes.root}>
                        <div className={classes.headerRoot}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Typography component="h2" style={{
                                    color: "#fff",
                                    fontSize: 18,
                                    marginLeft: 15,
                                    marginTop: 8,
                                }} gutterBottom>Edit User
           </Typography>
                                <IconButton aria-label="close"
                                    className={classes.closeBtn}
                                    onClick={this.handleClose}>
                                    <Tooltip title="close" aria-label="close">
                                        <CloseIcon />
                                    </Tooltip>
                                </IconButton>
                            </Grid>
                        </div>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12}>
                                <form className={classes.container} noValidate autoComplete="off">
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
                                            value={this.state.role}
                                            onChange={this.handleChange}
                                            className={classes.textField}
                                            variant="outlined"
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
                                            style={{ backgroundColor: isLoading ? Colors.blueSecondary : '' }}
                                            disableRipple={isLoading}
                                            onClick={this.handleSubmit}
                                        >
                                            <span className='submit-btn'>{isLoading ? <Loader type="ThreeDots"
                                                color="#f4f4f4"
                                                height="15"
                                                width="30" /> : 'Edit User'}</span>
                                        </Button>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </div>
                </Dialog>
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
        // editTransferPage: (datas) => dispatch(editTransferPage(datas))
    }
}
export default connect()(withStyles(styles)(EditUser));