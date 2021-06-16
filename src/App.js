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
import Account from './components/Account';

class App extends Component{
  componentDidMount(){
    this.props.onTryAutoSignup();
  
  }

  render(){
    
  return (
    <Router>
    <div>
      <Route  path="/home/rate/:id" render={({match})=>(<Rate id={match.params.id}/>)}/>
      <Route  path="/home/book/movie/:id" render={({match})=>(<BookTicket id={match.params.id}/>)}/>  
      <Route  path="/home">
      <AppBar />
      </Route>
      <Route  exact path="/">
      <AppBar />
      </Route>
      <Route  path="/home/login">
      <Login />
      </Route>
      <Route  path="/home/signup">
      <Signup />
      </Route>
      <Route  path="/account">
      <Account />
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