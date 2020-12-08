import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Users from './containers/Users'
import User from './containers/User';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
          <a className="navbar-brand" href="#">{this.props.siteName}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item"><NavLink className="nav-link" to="/home">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/users">Users</NavLink></li>
              <li className="nav-item"> <NavLink className="nav-link" to="/user/1">User</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
            </ul>
          </div>
        </nav>


        <div className="container">
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/users/:pageNumber?" component={Users} />
          <Route path="/user/:userID" component={User} />
        </div>

      </Router>

    );
  }
}

const mapStateToProps = state => {
  return {
    siteName: state.siteName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSiteName(newSiteName) {
      dispatch({
        type: "CHANGE_SITE_NAME",
        payload: newSiteName
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);