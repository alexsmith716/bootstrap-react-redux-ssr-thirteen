import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import CounterPreloadedState from '../../components/widgets/Counter/CounterPreloadedState';
import CounterMultireducer from '../../components/widgets/Counter/CounterMultireducer';
// import Planets from '../../components/d3/Planets/Planets';
import LineChart from '../../components/d3/LineChart/LineChart';
// import LineChartA from '../../components/d3/LineChart/LineChartA';
// import LineChartB from '../../components/d3/LineChart/LineChartB';
import TemperatureCalculator from '../../components/widgets/LiftingStateUp/TemperatureCalculator';
import { connect } from 'react-redux';

@connect(state => ({
  online: state.online
}))

// --------------------------------------------------------------------------

class AboutTwo extends Component {

  static propTypes = {
    online: PropTypes.bool.isRequired
  };

  // called after the first render
  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>> AboutTwo > componentDidMount() <<<<<<<<<<<<<<<<<<<<<<');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('>>>>>>>>>>>>>>>> AboutTwo > componentDidUpdate() <<<<<<<<<<<<<<<<<<<<<<');
  }

  componentWillUnmount() {
    console.log('>>>>>>>>>>>>>>>> AboutTwo > componentWillUnmount() <<<<<<<<<<<<<<');
  }

    // invoked before rendering when new props or state are being received
  // --------------------------------------------------------------------------------
  shouldComponentUpdate(nextProps, nextState) {
    console.log('>>>>>>>>>>>>>>>> AboutTwo > shouldComponentUpdate() > nextProps: ', nextProps);
    return nextProps;
  };

  // ERROR HANDLING (error during render, in a lifecycle, in the constructor of any child component)
  // ----------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------

  // invoked after an error has been thrown by a descendant component
  // receives the error thrown as param and returns a value to update state
  static getDerivedStateFromError(error) {
    console.log('>>>>>>>>>>>>>>>> AboutTwo > getDerivedStateFromError() > error: ', error);
    // Update state so the next render will show the fallback UI.
    // return { hasError: true };
    return;
  }

  // LineChart: need to handle data requests for SW >> Cannot read property 'message' of undefined

  // Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, 
  //    log those errors, and display a fallback UI instead of the component tree that crashed. 
  // Error boundaries catch errors during rendering, in lifecycle methods, 
  //    and in constructors of the whole tree below them

  // called with any uncaught error that bubbles up from the component's children's lifecycle methods, constructors, render methods
  // when triggered can't render 'this.props.children' && must replace it with some sort of fallback UI
  // 
  // invoked after an error has been thrown by a descendant component
  // receives two parameters:
  // 1) error - The error that was thrown
  // 2) info - object   a componentStack key containing information about which component threw the error
  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // logComponentStackToMyService(info.componentStack);
    console.log('>>>>>>>>>>>>>>>> AboutTwo > componentDidCatch() > info.componentStack: ', info.componentStack);
  }

  render() {

    const { online } = this.props;
    const aboutImageMain = require('../../theme/images/about-750-450.png');
    const aboutImageOurCustomers = require('../../theme/images/about-500-300.png');
    const styles = require('./scss/AboutTwo.scss');

    console.log('>>>>>>>>>>>>>>>> AboutTwo > render() > ONLINE???: ', online);

    return (

      <div className="container">

        <Helmet title="About Two" />

        <h1 className={styles.uniqueColor}>About Two</h1>

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
                  D3 Data visualization
                </h5>

                <div className="card-body-container">

                  <div className="card-body-content">

                    {online && (
                      <LineChart 
                        as='AboutTwoMultireducerLineChart1' 
                        request={'/json-data/lineChartA.json'}
                        title='D3 LineChart 1' 
                      />
                    )}

                    {!online && (
                      <div className="alert alert-danger fade show" role="alert">
                        <div className="text-center">NETWORK ERROR</div>
                      </div>
                    )}

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
                  D3 Data visualization
                </h5>

                <div className="card-body-container">

                  <div className="card-body-content">

                    {online && (
                      <LineChart 
                        as='AboutTwoMultireducerLineChart2' 
                        request={'/json-data/lineChartB.json'}
                        title='D3 LineChart 2' 
                      />
                    )}

                    {!online && (
                      <div className="alert alert-danger fade show" role="alert">
                        <div className="text-center">NETWORK ERROR</div>
                      </div>
                    )}

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
                  Lifting State Up 'AboutTwo1'
                </h5>

                <div className="card-body-container">

                  <div className="card-body-content">

                    <TemperatureCalculator as="AboutTwo1" />

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
                  Lifting State Up 'AboutTwo2'
                </h5>

                <div className="card-body-container">

                  <div className="card-body-content">

                    <TemperatureCalculator as="AboutTwo2" />

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
                  Most Basic CounterPreloadedState
                </h5>

                <div className="card-body-container">

                  <div className="card-body-content">

                    <CounterPreloadedState />

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
                  Most Basic CounterMultireducer 'AboutTwoMultireducer1'
                </h5>

                <div className="card-body-container">

                  <div className="card-body-content">

                    <CounterMultireducer as="AboutTwoMultireducer1" />

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
                  Most Basic CounterMultireducer 'AboutTwoMultireducer2'
                </h5>

                <div className="card-body-container">

                  <div className="card-body-content">

                    <CounterMultireducer as="AboutTwoMultireducer2" />

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
                  Most Basic CounterMultireducer 'AboutTwoMultireducer3'
                </h5>

                <div className="card-body-container">

                  <div className="card-body-content">

                    <CounterMultireducer as="AboutTwoMultireducer3" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

        <div className="row">
          <div className="col-lg-6">
            <img className="img-fluid rounded mb-4" src={aboutImageMain} alt="" />
          </div>
          <div className="col-lg-6">
            <h2>About Too Modern Business</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>
          </div>
        </div>

        <h2>Our Team</h2>

        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card h-100 text-center">
              <img className="card-img-top" src={aboutImageMain} alt="" />
              <div className="card-body">
                <h4 className="card-title">Team Member</h4>
                <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
              </div>
              <div className="card-footer">
                <a href="#">name@example.com</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100 text-center">
              <img className="card-img-top" src={aboutImageMain} alt="" />
              <div className="card-body">
                <h4 className="card-title">Team Member</h4>
                <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
              </div>
              <div className="card-footer">
                <a href="#">name@example.com</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100 text-center">
              <img className="card-img-top" src={aboutImageMain} alt="" />
              <div className="card-body">
                <h4 className="card-title">Team Member</h4>
                <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
              </div>
              <div className="card-footer">
                <a href="#">name@example.com</a>
              </div>
            </div>
          </div>
        </div>

        <h2>Our Customers</h2>
        <div className="row">
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src={aboutImageOurCustomers} alt="" />
          </div>
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src={aboutImageOurCustomers} alt="" />
          </div>
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src={aboutImageOurCustomers} alt="" />
          </div>
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src={aboutImageOurCustomers} alt="" />
          </div>
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src={aboutImageOurCustomers} alt="" />
          </div>
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src={aboutImageOurCustomers} alt="" />
          </div>
        </div>

      </div>
    );
  }
}

export default AboutTwo;
