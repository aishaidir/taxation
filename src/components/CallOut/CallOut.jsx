import React, { Component } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Colors } from '../../styles/themes';
import { withStyles } from '@material-ui/core';
import { styles } from '../../styles/callout.styles';
import {
   Button, Menu, MenuItem, Divider
} from '../../mui';


class CallOut extends Component {
state={
    anchorEl: null,
}


handleFirstActionProps =() =>{
 
  // this.setState({anchorEl:!this.state.anchorEl})
}

handleSecondActionProps =() =>{
  // this.setState({ anchorEl: !this.state.anchorEl })
}
    CalloutOpen = (event) => {
        this.setState({ anchorEl: event.currentTarget });
      };

  render() {
      const {
        classes, 
        TopAction,
        BottomAction,
        ThirdAction,
        id,
      } = this.props;
      console.log()
      const {  anchorEl } = this.state
    return (
      <div key={this.props.key} className={classes.callout}>
         <Button  onClick={this.CalloutOpen} color="inherit" className={classes.callOutButton}>
           <MoreVertIcon size="small" />
        </Button>
        <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  transformOrigin={{ vertical: "top"}}
                  open={Boolean(anchorEl)}
                  onClose={() => this.setState({ anchorEl: null })}
                  classes={{ paper: classes.paper }}
                  autoFocus={false}
                  disableAutoFocusItem={true}
                >
                  {TopAction && <MenuItem onClick={()=>this.handleFirstActionProps()} 
                  color={Colors.danger}
                   style={{paddingLeft:0,paddingRight:0,}} 
                  >{TopAction}</MenuItem>
                }
                <Divider/>
                {BottomAction && <MenuItem  onClick={()=>this.handleSecondActionProps()} 
                style={{color:Colors.danger,paddingLeft:0,paddingRight:0,}}
                  >{BottomAction}</MenuItem>}
                </Menu>
                
      </div>
    )
  }
}

export default withStyles(styles)(CallOut)