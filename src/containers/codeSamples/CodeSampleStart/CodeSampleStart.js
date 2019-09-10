import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

const CodeSampleStart = () => {

  return (

      <div className="container">

        <Helmet title="Code Sample Start" />

        <h1 className="mt-4 mb-3">Bin Start</h1>

        <h4 className="mt-4 mb-3">file: bin > start.js</h4>

        <div className="row">

          <div>

            <pre className="pre-style" >
{`
const fs = require('fs');
require('colors');
const path = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const port = process.env.PORT || 8080;
const app = express();

app.set('port', port);
app.use(morgan('dev'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

// ---------------------------------------------------------------------

let isBuilt = false;

const done = () => !isBuilt
  && app.listen(app.get('port'), () => {
    isBuilt = true
    console.log('>>>>>>>> BIN > START > STATS COMPILER HAS COMPLETED BUILD ! WAIT IS OVER !');
    console.info('>>>>>>>> BIN > START > Express server Running <<<<<<<<<<');
  })

app.use(express.static(path.join(__dirname, '..', 'build')));

const clientConfigProd = require('../webpack/prod.client');
const serverConfigProd = require('../webpack/prod.server');

webpack([clientConfigProd, serverConfigProd]).run((err, stats) => {
  if (err) {
    console.error('>>>>>>>> BIN > START > WEBPACK COMPILE > PROD > err: ', err.stack || err);
    if (err.details) {
      console.error('>>>>>>>> BIN > START > WEBPACK COMPILE > PROD > err.details: ', err.details);
    }
    return;
  }

  const clientStats = stats.toJson().children[0];

  if (stats.hasErrors()) {
    console.error('>>>>>>>> BIN > START > WEBPACK COMPILE > PROD > stats.hasErrors: ', clientStats.errors);
  }
  if (stats.hasWarnings()) {
    console.warn('>>>>>>>> BIN > START > WEBPACK COMPILE > PROD > stats.hasWarnings: ', clientStats.warnings);
  }

  const serverRender = require('../build/server/server.js').default;

  // const serverRenderTest = require('../build/server/serverTest.js').default;
  // app.use(serverRenderTest({ clientStats }));

  app.use(serverRender({ clientStats }));

  done();
});
`}
            </pre>

          </div>
        </div>
      </div>
  );
};

export default CodeSampleStart;
