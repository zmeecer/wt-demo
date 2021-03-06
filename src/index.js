import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers/App/App';
import Chat from './containers/Chat';
import Message from './containers/Message';
import store from './store/configureStore'
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="chat" component={Chat} />
        <Route path="message(/:id)" component={Message} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
