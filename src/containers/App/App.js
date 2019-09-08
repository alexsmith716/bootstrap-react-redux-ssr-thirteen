import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import qs from 'qs';
import { Link } from 'react-router-dom';

import { isLoaded as isInfoLoaded, load as loadInfo } from '../../redux/modules/info';
import { InfoBar } from '../../components'; //Notifs
import { Footer } from '../../components';
import { ReadmeModal } from '../../components';
import { FontsModal } from '../../components';
import config from '../../../config/config';

// --------------------------------------------------------------------------

@provideHooks({
  fetch: async ({ store: { dispatch, getState } }) => {
    if (!isInfoLoaded(getState())) {
      await dispatch(loadInfo()).catch(() => null);
      console.log('>>>>>>>>>>>>>>>>> APP > dispatch(loadInfo()) 1111>>>>>>>>>>>>>>>>>>>>>>>>v: ');
    } else {
      console.log('>>>>>>>>>>>>>>>>> APP > dispatch(loadInfo()) 2222>>>>>>>>>>>>>>>>>>>>>>>>i: ');
    }
  }
})

// --------------------------------------------------------------------------

@withRouter

// --------------------------------------------------------------------------

class App extends Component {

  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired,
    // user: PropTypes.shape({ email: PropTypes.string }),
    // notifs: PropTypes.shape({global: PropTypes.array}).isRequired,
  };

  static defaultProps = {
    user: null
  };

  state = {
    user: this.props.user,
    prevProps: this.props
  };

  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>> APP > componentDidMount() <<<<<<<<<<<<<<');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('>>>>>>>>>>>>>>>> APP > componentDidUpdate() <<<<<<<<<<<<<<');
    // const { location } = this.props;
    // if (location.pathname !== prevProps.location.pathname) {
    //   window.scrollTo(0, 0);
    // }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('>>>>>>>>>>>>>>>> APP > getDerivedStateFromProps() <<<<<<<<<<<<<<');
    const { prevProps } = state;
    // Compare the incoming prop to previous prop
    const user = !_.isEqual(prevProps.user, props.user) ? props.user : state.user;

    if (!prevProps.user && props.user) {
      const query = qs.parse(props.location.search, { ignoreQueryPrefix: true });
      props.pushState(query.redirect || '/login-success');
    } else if (prevProps.user && !props.user) {
      props.pushState('/');
    }

    return {
      user,
      prevProps: props
    };
  }

  render() {

    const { notifs, route } = this.props;

    const styles = require('./styles/App.scss');

    return (

      <HelmetProvider>

        <div className={styles.app}>

          <Helmet {...config.app.head} />

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">

            <div className="container">

              <Link to='/' className="navbar-brand js-scroll-trigger">Election App</Link>

              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarResponsive">

                <ul className="navbar-nav mr-auto">

                  <li className="nav-item">
                    <a className="nav-link" data-toggle="modal" href="#ReadmeModal">README.js</a>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Code Samples</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                      <Link to='/codesamplewebpackprodclient' className="dropdown-item js-scroll-trigger">prod.client.js</Link>
                      <Link to='/codesamplewebpackprodserver' className="dropdown-item js-scroll-trigger">prod.server.js</Link>
                    </div>
                  </li>

                  <li className="nav-item">
                    <Link to='/login' className="nav-link js-scroll-trigger">
                      <span className={`fas fa-fw fa-sign-in-alt ${styles.sharedVarColorRutgersScarletXX}`}></span>Login</Link>
                  </li>

                  <li className="nav-item">
                    <Link to='/register' className="nav-link js-scroll-trigger">Register</Link>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link font-old-english" data-toggle="modal" href="#FontsModal">Fonts</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link font-norwester" href="#">
                      <span className={`fas fa-fw fa-headphones ${styles.colorGoldLocal}`}></span><span className={styles.testColorFont}>Headphones!</span></a>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Interesting Links</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown02">
                      <Link to='/about' className="dropdown-item js-scroll-trigger">About</Link>
                      <Link to='/aboutone' className="dropdown-item js-scroll-trigger">About One!</Link>
                      <Link to='/abouttwo' className="dropdown-item js-scroll-trigger">About Two!</Link>
                      <Link to='/aboutthree' className="dropdown-item js-scroll-trigger">About Three</Link>
                      <Link to='/aboutfour' className="dropdown-item js-scroll-trigger">About Four</Link>
                      <Link to='/stickyfooter' className="dropdown-item js-scroll-trigger">StickyFooter</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className={styles.appContent}>
            {renderRoutes(route.routes)}
          </div>

          <InfoBar />

          <Footer 
            styles={ styles }
          />

          <ReadmeModal />

          <FontsModal 
            styles={ styles }
          />

        </div>
      </HelmetProvider>
    );
  }
}

export default App;
