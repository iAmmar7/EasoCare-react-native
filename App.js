import React from 'react';
import {StatusBar} from 'react-native';
import Authentication from './screens/Auth/index';

import Profile from './screens/Profile/index';
import CreateProfile from './screens/createProfile/index';
import Contact from './screens/contact/index';
import Coupons from './screens/coupons/index';
import CarouselItems from './screens/carousel/index';
import Intro from './screens/introScreens/index';

const App = () => {
  return (
    <>
      <StatusBar barStyle="white" />
      <Intro />
    </>
  );
};

export default App;
