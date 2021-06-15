import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux'
import * as actions from '../../store/actions/auth';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

 class FormDialog extends React.Component {
  state = {
    open: true,
    username:'',
    password:''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    this.props.history.push('/');
  };

  handleClose = () => {
    this.setState({ open: false});
    this.props.history.push('/');
  }
  handleLogin=()=>{
    const auth = {
      ...this.state
    }
    this.props.onAuth(auth.username,auth.password);
    this.setState({ open: false});
    this.props.history.push('/');
  }
  handleSignup=()=>{
    this.props.history.push('/signup');
  }
  handleuserChange=(event)=>{
    this.setState({username:event.target.value});
  }
  handlepassChange=(event)=>{
    this.setState({password:event.target.value});
  }
  render() {
    let errorMessage = null;
    if( this.props.error){
      errorMessage = (
        <p>{this.props.error.message}</p>
      );
    }
    return (
      <div>
        {errorMessage}
        {
          this.props.loading ?
          <Box sx={{ display: 'flex' }}>
          <CircularProgress />
          </Box>
          :

          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To access to this website, please signup or login if you already have an account
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Username"
              type="text"
              fullWidth
              onChange={this.handleuserChange}
              required={true}
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="password"
              fullWidth
              onChange={this.handlepassChange}
              required={true}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleLogin} color="primary">
              Login
            </Button>
            <Button onClick={this.handleSignup} color="primary">
              SignUp
            </Button>
          </DialogActions>
        </Dialog>
        }
        
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
  return {
    loading:state.loading,
    error:state.error
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    onAuth:(username,password)=>dispatch(actions.authLogin(username,password))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FormDialog));