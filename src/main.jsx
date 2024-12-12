import { StrictMode } from 'react';

import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import  App from './components/App';
import { store, persistor } from './redux/store';
import './index.css'





createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
        
        <App />
     
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
