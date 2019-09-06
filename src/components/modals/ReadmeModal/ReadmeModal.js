import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ReadmeModal = props => {

  const { styles } = props;

  return (

    <div className="app-modal modal fade" id="ReadmeModal" tabIndex="-1" role="dialog" aria-labelledby="appModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex flex-items-center flex-justify-between px-2">

            <h5 className="modal-title pr-3" id="appModalLabel">
              <svg aria-hidden="true" className="octicon octicon-book svg-padding-right" height="22" version="1.1" viewBox="0 1 16 16" width="22">
                  <path d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z" fillRule="evenodd">
                  </path>
              </svg>
              README.js
            </h5>

            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">

            <div>
                <div>
                    <article>

                        <h2>
                          App 2020
                        </h2>

                        <p>
                          A meeting place for the 2020 Primary! Cast votes and discuss what's going on. Actually, more of a JS playground that keeps evolving.
                        </p>
                        <p>
                          Why? Because the I really enjoy the challenge and reward of modern JavaScript development. Instead of creating alot of small projects with a single focus, I just keep building upon this big one.
                        </p>

                        {/* ------------------------------ */}

                        <h3>
                          Installation
                        </h3>
                        <ol>
                          <li>
                            Installation 1 ...
                          </li>
                          <li>
                            Installation 2 ...
                          </li>
                          <li>
                            Installation 3 ...
                          </li>
                        </ol>

                        {/* ------------------------------ */}

                        <h3>
                          About
                        </h3>
                        <p>
                          About intro here ...
                        </p>
                        <h4>
                          Features
                        </h4>
                        <p>
                          Features intro here ...
                        </p>
                        <ul>
                          <li>
                            Listed feature 1 ...
                          </li>
                          <li>
                            Listed feature 2 ...
                          </li>
                        </ul>
                        <h4>
                          Future directions
                        </h4>
                        <p>
                          Future directions here...
                        </p>

                        {/* ------------------------------ */}

                        <h3>
                          Contributing
                        </h3>
                        <p>
                          Contributing here...
                        </p>
                        <h4>
                          Code Style
                        </h4>
                        <p>
                          Code Style here...
                        </p>
                    </article>
                </div>
            </div>

          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
          </div>

        </div>
      </div>
    </div>
  );
};

// ReadmeModal.propTypes = {};

export default ReadmeModal;
