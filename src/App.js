import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Login from './components/Login/Login';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {
          !isAuthenticated() && (
            <Login {...this.props} />
          )
        }
        {
          isAuthenticated() && (
            <Navbar fluid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">OAuth2 Providers</a>
                </Navbar.Brand>
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'home')}
                >
                  Home
                </Button>
                {
                  !isAuthenticated() && (
                      <Button
                        id="qsLoginBtn"
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.login.bind(this)}
                      >
                        Log In
                      </Button>
                    )
                }
                {
                  isAuthenticated() && (
                      <Button
                        id="qsLogoutBtn"
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.logout.bind(this)}
                      >
                        Log Out
                      </Button>
                    )
                }
              </Navbar.Header>
            </Navbar>
          )
        }
      </div>
    );
  }
}

export default App;
