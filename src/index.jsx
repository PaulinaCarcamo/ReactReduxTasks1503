import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/theme.scss';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

// import { getTodosAsync } from './redux/slice';
// store.dispatch(getTodosAsync())

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const persistor = persistStore(store)

root.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
    </PersistGate>
  </React.StrictMode>,
);





