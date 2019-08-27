import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import CatsForm from '../../components/widgets/CatsForm/CatsForm';
import Clock from '../../components/widgets/Clock/Clock';
import RandomBootstrapAlert from '../../components/widgets/RandomBootstrapAlert/RandomBootstrapAlert';
import FilterableTable from '../../components/FilterableTable/FilterableTable';
import TemperatureCalculator from '../../components/widgets/LiftingStateUp/TemperatureCalculator';
import CounterPreloadedState from '../../components/widgets/Counter/CounterPreloadedState';
import CounterMultireducer from '../../components/widgets/Counter/CounterMultireducer';
// import { withStore } from '../../../hoc';
import { connect } from 'react-redux';

@connect(state => ({
  online: state.online
}))

// --------------------------------------------------------------------------

// @withStore

class AboutOne extends Component {

  static propTypes = {
    online: PropTypes.bool.isRequired
  };

  // called after the first render
  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>> AboutOne > componentDidMount() <<<<<<<<<<<<<<<<<<<<<<');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('>>>>>>>>>>>>>>>> AboutOne > componentDidUpdate() <<<<<<<<<<<<<<<<<<<<<<');
  }

  componentWillUnmount() {
    console.log('>>>>>>>>>>>>>>>> AboutOne > componentWillUnmount() <<<<<<<<<<<<<<');
  }

  // invoked before rendering when new props or state are being received
  // --------------------------------------------------------------------------------
  shouldComponentUpdate(nextProps, nextState) {
    console.log('>>>>>>>>>>>>>>>> AboutOne > shouldComponentUpdate() > nextProps: ', nextProps);
    return nextProps;
  };

  // ERROR HANDLING (error during render, in a lifecycle, in the constructor of any child component)
  // ----------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------

  static getDerivedStateFromError(error) {
    console.log('>>>>>>>>>>>>>>>> AboutOne > getDerivedStateFromError() > error: ', error);
    return;
  }

  componentDidCatch(error, info) {
    console.log('>>>>>>>>>>>>>>>> AboutOne > componentDidCatch() > info.componentStack: ', info.componentStack);
  }

  render() {

    const styles = require('./scss/AboutOne.scss');
    // const uri = encodeURI('/product-categories-small.json');
    // const uri = encodeURI('/product-categories.json');

    // const dropdownTiltle = 'Select Product Table';

    const dropDownOptions = [
      'https://api.github.com/feeds',
      'https://api.github.com/emojis',
      'https://api.github.com/events',
      'https://api.github.com/gists/public',
      'https://api.github.com/gists/656565656565',
      '/json-data/product-categories-test.json',
      '/json-data/events-test.json',
      '/json-data/product-categories-small.json',
      '/json-data/product-categories.json',
      '/json-data/product-categories-small.json',
      '/json-data/product-categories.json',
      '/json-data/product-categories-small.json',
      '/json-data/product-categories.json',
      '/json-data/product-categories-small.json',
      '/json-data/product-categories.json',
    ];

    const dropDownOptions2 = [
      'https://api.github.com/feeds',
      'https://api.github.com/emojis',
      'https://api.github.com/events',
      'https://api.github.com/gists/public',
      '/json-data/product-categories-small2.json',
      '/json-data/product-categories2.json',
    ];

    return (

      <div className="container">

        <Helmet title="About One" />

        <h1 className={styles.uniqueColor}>About One</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>

        {/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

        <div className="row">

          <div className="col-lg-12 mb-4">

            <div className="card h-100">

              <h2 className="card-header text-center">
                Thinking in React!
              </h2>

              <div className="card-body">

                <h5 className="card-title text-center">
                  Most Basic CounterPreloadedState 1
                </h5>

                <div className="basic-outer-box padding-two-border-radius-six">

                  <div className="basic-inner-box padding-five-border-radius-three">

                    <CounterPreloadedState/>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

        <div className="row">

          <div className="col-lg-12 mb-4">

            <div className="card h-100">

              <h2 className="card-header text-center">
                Thinking in React!
              </h2>

              <div className="card-body">

                <h5 className="card-title text-center">
                  Most Basic CounterPreloadedState 2
                </h5>

                <div className="basic-outer-box padding-two-border-radius-six">

                  <div className="basic-inner-box padding-five-border-radius-three">

                    <CounterPreloadedState/>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

        <div className="row">

          <div className="col-lg-12 mb-4">

            <div className="card h-100">

              <h2 className="card-header text-center">
                Thinking in React!
              </h2>

              <div className="card-body">

                <h5 className="card-title text-center">
                  Most Basic CounterMultireducer 'AboutOneMultireducer1'
                </h5>

                <div className="basic-outer-box padding-two-border-radius-six">

                  <div className="basic-inner-box padding-five-border-radius-three">

                    <CounterMultireducer as="AboutOneMultireducer1" />

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

        <div className="row">

          <div className="col-lg-12 mb-4">

            <div className="card h-100">

              <h2 className="card-header text-center">
                Thinking in React!
              </h2>

              <div className="card-body">

                <h5 className="card-title text-center">
                  Filterable Product Table 1
                </h5>

                <div className="basic-outer-box padding-two-border-radius-six">

                  <div className="basic-inner-box padding-five-border-radius-three">

                    <FilterableTable
                      as='AboutOneMultireducerFilterableTable1'
                      optionsArray={dropDownOptions} 
                      description='Filterable Product Table 1'
                    />

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

        <div className="row">

          <div className="col-lg-12 mb-4">

            <div className="card h-100">

              <h2 className="card-header text-center">
                Thinking in React!
              </h2>

              <div className="card-body">

                <h5 className="card-title text-center">
                  Filterable Product Table 2
                </h5>

                <div className="basic-outer-box padding-two-border-radius-six">

                  <div className="basic-inner-box padding-five-border-radius-three">

                    <FilterableTable as='AboutOneMultireducerFilterableTable2' optionsArray={dropDownOptions2} description='Filterable Product Table 2' />

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

        <div className="row">

          <div className="col-lg-12 mb-4">

            <div className="card h-100">

              <h2 className="card-header text-center">
                Dynamic, Controlled Form 3
              </h2>

              <div className="card-body">

                <h5 className="card-title text-center">
                  Cats Form
                </h5>

                <div className="basic-outer-box padding-two-border-radius-six">

                  <div className="basic-inner-box padding-five-border-radius-three">

                    <CatsForm />

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

        <div className="row">

          <div className="col-lg-12 mb-4">

            <div className="card h-100">

              <h2 className="card-header text-center">
                Dynamic, Controlled Form 1
              </h2>

              <div className="card-body">

                <h5 className="card-title text-center">
                  Cats Form
                </h5>

                <div className="basic-outer-box padding-two-border-radius-six">

                  <div className="basic-inner-box padding-five-border-radius-three">

                    <CatsForm />

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

        <div className="row">

          <div className="col-lg-12 mb-4">

            <div className="card h-100">

              <h2 className="card-header text-center">
                Dynamic, Controlled Form 2
              </h2>

              <div className="card-body">

                <h5 className="card-title text-center">
                  Cats Form
                </h5>

                <div className="basic-outer-box padding-two-border-radius-six">

                  <div className="basic-inner-box padding-five-border-radius-three">

                    <CatsForm />

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

        <div className="row">

          <div className="col-lg-12 mb-4">

            <div className="card h-100">

              <h2 className="card-header text-center">
                Clock: state and lifecycle in a basic React component!
              </h2>

              <div className="card-body text-center">

                <div className="card-title">

                  <RandomBootstrapAlert />

                  <p>With supporting text below as a natural lead-in to additional content.</p>

                  <a href="#" className="btn btn-primary">Go somewhere</a>

                </div>
              </div>

              <div className="card-footer text-muted text-center">

                <Clock />

              </div>
            </div>
          </div>
        </div>

        {/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

        <div className="row">

          <div className="col-lg-12 mb-4">

            <div className="card h-100">

              <h2 className="card-header text-center">
                Thinking in React!
              </h2>

              <div className="card-body">

                <h5 className="card-title text-center">
                  Lifting State Up 'AboutOne1'
                </h5>

                <div className="basic-outer-box padding-two-border-radius-six">

                  <div className="basic-inner-box padding-five-border-radius-three">

                    <TemperatureCalculator as="AboutOne1" />

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

        <div className="row">

          <div className="col-lg-12 mb-4">

            <div className="card h-100">

              <h2 className="card-header text-center">
                Thinking in React!
              </h2>

              <div className="card-body">

                <h5 className="card-title text-center">
                  Lifting State Up 'AboutOne2'
                </h5>

                <div className="basic-outer-box padding-two-border-radius-six">

                  <div className="basic-inner-box padding-five-border-radius-three">

                    <TemperatureCalculator as="AboutOne2" />

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

      </div>
    );
  }
}

export default AboutOne;
