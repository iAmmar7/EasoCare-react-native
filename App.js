import React from 'react';
import {StatusBar} from 'react-native';
import Authentication from './screens/Auth/index';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Authentication />
    </>
  );
};

export default App;
