import React from 'react';
import AppBar from './components/AppBar';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Rate from './components/Rate';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import {connect} from 'react-redux';
import { Component } from 'react';
import * as actions from './store/actions/auth';
import BookTicket from './components/BookTicket';

class App extends Component{
  componentDidMount(){
    this.props.onTryAutoSignup();
  
  }

  render(){
    
  return (
    <Router>
    <div>
      <Route  path="/rate/:id" render={({match})=>(<Rate id={match.params.id}/>)}/>
      <Route  path="/book/movie/:id" render={({match})=>(<BookTicket id={match.params.id}/>)}/>    
      <Route  path="/">
      <AppBar />
      </Route>
      <Route  path="/login">
      <Login />
      </Route>
      <Route  path="/signup">
      <Signup />
      </Route>       
    </div>
    </Router>
  );
}
}
const mapStateToProps = state =>{
    return{
      isAuthenticated:state.token !== null
    }
  }

  const mapDispatchToProps = dispatch =>{
    return {
      onTryAutoSignup: ()=> dispatch(actions.authCheckState())
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(App);