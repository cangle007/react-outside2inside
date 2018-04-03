import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setupStore from './redux/setupStore';

import HomeContainer from './redux/containers/HomeContainer';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
const store = setupStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                component={HomeContainer}
                history={history}
              />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
