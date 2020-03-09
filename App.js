import React from 'react';
import {StatusBar} from 'react-native';
import Authentication from './screens/Auth/index';

import Profile from './screens/Profile/index';
import CreateProfile from './screens/createProfile/index';

const App = () => {
  return (
    <>
      <StatusBar barStyle="white" />
      <CreateProfile />
    </>
  );
};

export default App;
