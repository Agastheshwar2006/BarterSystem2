import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomScreen from './screens/WelcomeScreen';
import {AppDrawerNavigator} from './components/AppDrawerNavigation'

export default function App() {
    return (
      <AppContainer/>
    );
  }
  
  
  const switchNavigator = createSwitchNavigator({
    WelcomeScreen:{screen: WelcomeScreen},
    Drawer:{screen: AppDrawerNavigator}
  })
  
  const AppContainer =  createAppContainer(switchNavigator);
