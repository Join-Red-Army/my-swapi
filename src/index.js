// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// components
import ErrorBoundry from './components/error-boundry';
import App from './components/app';
import SwapiService from './service/swapi-service';
import { SwapiServiceProvider } from './components/swapi-service-context';

import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <SwapiServiceProvider value={new SwapiService()}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SwapiServiceProvider>
    </ErrorBoundry>
  </Provider>, 
  document.getElementById('root')
);