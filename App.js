import React from 'react';
import {StatusBar} from 'react-native';
import Authentication from './screens/Auth/index';

import Profile from './screens/Profile/index';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Profile />
    </>
  );
};

export default App;
