import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Home extends Component {
  login() {
    this.props.auth.login();
  }

  renewAccessToken = () => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.props.auth.renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <div>
              <h4>
                You are logged in!
              </h4>
              <h4 className="word-wrap"><strong>accessToken:</strong> <small>{localStorage.getItem('accessToken')}</small></h4>
              <h4 className="word-wrap"><strong>idToken:</strong> <small>{localStorage.getItem('idToken')}</small></h4>
              <h4 className="word-wrap"><strong>expiresAt:</strong> <small>{localStorage.getItem('expiresAt')}</small></h4>
              <Button
                id="qsRenewBtn"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.renewAccessToken}
              >
                Renew AccessToken
              </Button>
            </div>
          )
        }
        {
          !isAuthenticated() && (
            <h4>
              You are not logged in! Please{' '}
              <a style={{ cursor: 'pointer' }}
                onClick={this.login.bind(this)}>
                Log In
                </a>
              {' '}to continue.
              </h4>
          )
        }
      </div>
    );
  }
}

export default Home;
