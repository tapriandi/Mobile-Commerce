import React from 'react';
import Main from './navigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './services/store';

 const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
          <Main />
      </PersistGate>
    </Provider>
  )
}

export default App
