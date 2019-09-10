 // import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import { App, Home, NotFound } from './containers';
import About from './containers/About/Loadable';
import AboutOne from './containers/AboutOne/Loadable';
import AboutTwo from './containers/AboutTwo/Loadable';
import AboutThree from './containers/AboutThree/Loadable';
import AboutFour from './containers/AboutFour/Loadable';
import StickyFooter from './containers/StickyFooter/Loadable';
import BoardGames from './containers/games/BoardGames/Loadable';
import Login from './containers/Login/Loadable';
import Register from './containers/Register/Loadable';
// import LoginSuccess from './containers/LoginSuccess/Loadable';

import {
  CodeSampleStart,
  CodeSampleWebpackProdClient,
  CodeSampleWebpackProdServer,
  CodeSampleServer,
  CodeSampleStylesGlobalScss,
  CodeSampleApp,
  CodeSampleFilterabletable,
  CodeSampleReduxFilterabletable,
  CodeSampleInfoBar,
  CodeSampleReduxInfo,
  CodeSampleMockAPI,
  CodeSampleTimeElapsedClass,
  CodeSampleTimeElapsedClassTwo,
  CodeSampleTimeElapsedModule,
} from './containers';

import './theme/scss/global/styles.global.scss';

// const isAuthenticated = connectedReduxRedirect({
//   redirectPath: '/login',
//   authenticatedSelector: state => {
//     const a = state.auth.user;
//     return a !== null;
//   },       
//   wrapperDisplayName: 'UserIsAuthenticated'
// });

// const isNotAuthenticated = connectedReduxRedirect({
//   redirectPath: '/',
//   authenticatedSelector: state => {
//     const a = state.auth.user;
//     return a === null;
//   },
//   wrapperDisplayName: 'UserIsAuthenticated',
//   allowRedirectBack: false
// });

const routes = [{
  component: App,
  routes: [
    { path: '/', exact: true, component: Home },
    { path: '/about', component: About },
    { path: '/aboutone', component: AboutOne },
    { path: '/abouttwo', component: AboutTwo },
    { path: '/aboutthree', component: AboutThree },
    { path: '/aboutfour', component: AboutFour },
    { path: '/stickyfooter', component: StickyFooter },
    { path: '/boardgames', component: BoardGames },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/codesamplestart', component: CodeSampleStart },
    { path: '/codesamplewebpackprodclient', component: CodeSampleWebpackProdClient },
    { path: '/codesamplewebpackprodserver', component: CodeSampleWebpackProdServer },
    { path: '/codesampleserver', component: CodeSampleServer },
    { path: '/codesamplestylesglobalscss', component: CodeSampleStylesGlobalScss },
    { path: '/codesampleapp', component: CodeSampleApp },
    { path: '/codesamplefilterabletable', component: CodeSampleFilterabletable },
    { path: '/codesamplereduxfilterabletable', component: CodeSampleReduxFilterabletable },
    { path: '/codesampleinfobar', component: CodeSampleInfoBar },
    { path: '/codesamplereduxinfo', component: CodeSampleReduxInfo },
    { path: '/codesampleutilsmockapi', component: CodeSampleMockAPI },
    { path: '/codesampleutilstimeelapsedclass', component: CodeSampleTimeElapsedClass },
    { path: '/codesampleutilstimeelapsedclasstwo', component: CodeSampleTimeElapsedClassTwo },
    { path: '/codesampleutilstimeelapsedmodule', component: CodeSampleTimeElapsedModule },
    // { path: '/login-success', component: isAuthenticated(LoginSuccess) },
    // { path: '/register', component: isNotAuthenticated(Register) },
    { component: NotFound }
  ]
}];

export default routes;
