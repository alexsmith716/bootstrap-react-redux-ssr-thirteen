import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';
import * as authActions from '../../redux/modules/auth';

@connect(
  state => ({ user: state.auth.user }),
  authActions
)

class LoginSuccess extends Component {

  static propTypes = {
    user: PropTypes.shape({email: PropTypes.string}).isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {

    const { user, logout } = this.props;

    return (

      user && (
        <div className="container">

          <Helmet title="Login Success" />

          <h1>Login Success</h1>

          <div>
            <p>
              {user.email}, you have just successfully logged in, and were forwarded here by{' '}
              <code>getDerivedStateFromProps()</code> in
              <code>App.js</code>, which is listening to the auth reducer via redux
              <code>@connect</code>.
            </p>

            <p>
              The same function will forward you to <code>/</code> if you log out.
            </p>

            <div>
              <button type="button" className="btn btn-danger" onClick={logout}>
                <i className="fa fa-sign-out" /> Log Out
              </button>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default LoginSuccess;
