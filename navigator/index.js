import React, {Component} from 'react';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Authentication from '../screens/Auth/index';

import Profile from '../screens/Profile/index';
import CreateProfile from '../screens/createProfile/index';
import Contact from '../screens/contact/index';
import Coupons from '../screens/coupons/index';
import Comment from '../screens/comment/index';
import Notifications from '../screens/notifications/index';
import CarouselItems from '../screens/carousel/index';
import Intro from '../screens/introScreens/index';
import Drawer from '../screens/Sidebar/index';

const BasicStack = createStackNavigator(
  {
    Intro,
    Authentication,
    Profile,
    CreateProfile,
    Contact,
    Coupons,
    CarouselItems,
    Notifications,
    Comment,
  },
  {
    initialRouteName: 'Comment',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const CustomerDrawerNavigator = createDrawerNavigator(
  {
    BasicStack,
  },
  {
    contentComponent: ({navigation}) => <Drawer navigation={navigation} />,
    drawerWidth: 330,
    overlayColor: 'rgba(0,0,0,0.9)',
    screenContainerStyle: {borderTopRightRadius: 90},
  },
);

export default createAppContainer(CustomerDrawerNavigator);
