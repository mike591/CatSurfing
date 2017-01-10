import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import DashboardContainer from './dashboard/dashboard_container';


const _redirectIfLoggedIn = (nextState, replace) => {
  let currentUser = window.store.getState().session.currentUser
  if (currentUser) {
    replace('/dashboard')
  }
}

const _redirectIfLoggedOut = (nextState, replace) => {
  let currentUser = window.store.getState().session.currentUser
  if (!currentUser) {
    replace('/')
  }
}

const Root = ({ store }) => {
  return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <IndexRoute component={Home}/>
        <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
        <Route path="/dashboard" component={ DashboardContainer } onEnter={_redirectIfLoggedOut} />
      </Route>
    </Router>
  </Provider>
)};

export default Root;
