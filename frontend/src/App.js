import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import './css/style.css';

import Navbar from './components/navbar';
import Footer from './components/footer'
import Home from './pages/home';
import Calendar from './pages/calendar';
import Login from './pages/login';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/calendar" 
                exact 
                render={() => this.props.isLogged ? 
                          <Calendar /> :
                          <Redirect to={{ pathname: '/login' }} /> } />
        </Switch>
        
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    isLogged: store.isLogged
  }
}

export default connect(
  mapStateToProps
)(App);

