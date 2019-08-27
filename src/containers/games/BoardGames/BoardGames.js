import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

import TicTacToe from '../../../components/games/boardGames/TicTacToe/TicTacToe';


class BoardGames extends Component {

  // called after the first render
  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>> BoardGames > componentDidMount() <<<<<<<<<<<<<<<<<<<<<<');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('>>>>>>>>>>>>>>>> BoardGames > componentDidUpdate() <<<<<<<<<<<<<<<<<<<<<<');
  }

  componentWillUnmount() {
    console.log('>>>>>>>>>>>>>>>> BoardGames > componentWillUnmount() <<<<<<<<<<<<<<');
  }

  // invoked before rendering when new props or state are being received
  // --------------------------------------------------------------------------------
  shouldComponentUpdate(nextProps, nextState) {
    console.log('>>>>>>>>>>>>>>>> BoardGames > shouldComponentUpdate() > nextProps: ', nextProps);
    return nextProps;
  };

  // ERROR HANDLING (error during render, in a lifecycle, in the constructor of any child component)
  // ----------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------

  static getDerivedStateFromError(error) {
    console.log('>>>>>>>>>>>>>>>> BoardGames > getDerivedStateFromError() > error: ', error);
    // Update state so the next render will show the fallback UI.
    // return { hasError: true };
    return;
  }

  componentDidCatch(error, info) {
    console.log('>>>>>>>>>>>>>>>> BoardGames > componentDidCatch() > info.componentStack: ', info.componentStack);
  }

  render() {

    const styles = require('./scss/BoardGames.scss');

    return (

      <div className="container">

        <Helmet title="Board Games" />

        <h1 className={`mt-4 mb-3 ${styles.uniqueColor}`}>Board Games</h1>

        <div className="row">

          <div className="col-lg-12">

            <TicTacToe />

          </div>
        </div>

      </div>
    );
  }
}

export default BoardGames;
