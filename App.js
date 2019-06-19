import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import Home from './src/screen/home'
import Login from './src/screen/login'
import Signup from './src/screen/Signup'
import LocalNews, {LocalNewsNavigationOption} from './src/screen/localNews'
import GlobalNews, { GlobalNewsNavigationOption } from './src/screen/globalNews'
import Setting from './src/screen/setting'
import Profile from './src/screen/profile'
import Drawer from './src/screen/drawer'



const NewsTab = createBottomTabNavigator(
  
  {
    LocalNews: {
      screen: LocalNews,
      navigationOptions: LocalNewsNavigationOption,
    },
    GlobalNews: {
      screen: GlobalNews,
      navigationOptions: GlobalNewsNavigationOption,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'green'
    }
  }
)

const AccountTab = createBottomTabNavigator({
  Profile: Profile,
  Setting: Setting,
})

const DrawerNavigator = createDrawerNavigator(
  {
    NewsTab: NewsTab,
    AccountTab: AccountTab,
  },
  {
    contentComponent: Drawer,
  }
);

const AppNavigator = createStackNavigator({
  Home: Home,
  Login: Login,
  Signup: Signup,
  News: DrawerNavigator,
});


export default createAppContainer(AppNavigator);