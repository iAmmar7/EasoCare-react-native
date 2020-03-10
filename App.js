import React from 'react';
import {StatusBar} from 'react-native';
import BasicStack from './navigator/index';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <>
      <StatusBar barStyle="white" />
      <BasicStack />
    </>
  );
};

export default App;
