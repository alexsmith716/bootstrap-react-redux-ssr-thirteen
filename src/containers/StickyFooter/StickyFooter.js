import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

class StickyFooter extends Component {

  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>> STICKYFOOTER > componentDidMount() <<<<<<<<<<<<<<');
  }

  componentWillUnmount() {
    console.log('>>>>>>>>>>>>>>>> STICKYFOOTER > componentWillUnmount() <<<<<<<<<<<<<<');
  }

  render() {

    const styles = require('./scss/StickyFooter.scss');

    return (

      <div className="container">

        <Helmet title="Sticky Footer" />

        <h1 className={styles.uniqueColor}>Sticky Footer Test!</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>

      </div>
    );
  }
}

export default StickyFooter;
