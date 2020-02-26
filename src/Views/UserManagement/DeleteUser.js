import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux'
import { Button, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import Tooltip from '@material-ui/core/Tooltip';
import Loader from 'react-loader-spinner';
import { deleteStyles } from '../../styles/scss/actionStyles'
// import { deleteTransferHelper } from '../../../helpers/Transfer'
import { green } from '../../mui';

class DeleteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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
    if (e.target) {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
  }
  handleDelete = () => {
    // let credentials = { page: 0, pagesize: 5 }
    // const { deleteTransferHelper, id, getTransferPage } = this.props
    // deleteTransferHelper(id)
    // setTimeout(() => {
    //   this.setState({ open: false })
    //   getTransferPage(credentials)
    // }, 2000)
  }
  render() {
    const { classes } = this.props
    const { isLoading } = this.props
    return (
      <div>
        <Button
          variant="contained"
          classes={{ root: classes.button, label: classes.btnLabel }}
          onClick={this.handleClickOpen}
        >
          <DeleteSharpIcon className={classes.deleteIcons} />
          <ListItemText primary="Delete" classes={{ primary: classes.ListItemText }} />
        </Button>
        <Dialog
          open={this.state.open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          onClose={this.handleClose}
        >

          <div className={classes.root}>
            <div className={classes.formWrapper}>
              <div className={classes.headerWrapper}>
                <Typography className={classes.delete}>Delete Transfer</Typography>
                <Tooltip title="close" aria-label="close">
                <CloseIcon className={classes.closeIcon} onClick={this.handleClose} />
                </Tooltip>
              </div>
              <div>
                <Typography className={classes.header}>
                  Are you sure you want to delete this user?
             </Typography>
              </div>
              <div className={classes.deleteButtonBox}>
                <Button
                  variant="outlined"
                  className={classes.cancelButton}
                  onClick={this.handleClose}
                  disabled={isLoading}
                  disableRipple={isLoading}

                >
                  Cancel
              </Button>
                <Button
                  variant="contained"
                  className={classes.submitButton}
                  onClick={this.handleDelete}
                  disabled={isLoading}
                  style={{ backgroundColor: isLoading ? green[900] : '' }}
                  disableRipple={isLoading}
                >
                  <span className={classes.rippleText}>{isLoading ? <Loader type="ThreeDots"
                    color="#f4f4f4"
                    height="15"
                    width="30" /> : 'Delete'}</span>
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    // transferData: state.transferReducer,
    // isLoading: state.transferReducer.actionLoading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // deleteTransferHelper: (id) => dispatch(deleteTransferHelper(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(deleteStyles)(DeleteUser));