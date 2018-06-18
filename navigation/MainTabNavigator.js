import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import SpeakerIndex from '../screens/SpeakerIndex'
import EmptyScreen from '../screens/EmptyScreen'

import Colors from '../constants/Colors'

const SpeakerStack = createStackNavigator({
  Speaker: SpeakerIndex,
})

SpeakerStack.navigationOptions = {
  tabBarLabel: 'Speakers',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-microphone${focused ? '' : '-outline'}`
          : 'md-microphone'
      }
    />
  ),

}

const ScheduleStack = createStackNavigator({
  Schedule: EmptyScreen,
})

ScheduleStack.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-time${focused ? '' : '-outline'}` : 'md-time'}
    />
  ),
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home'}
    />
  ),
}

const LocationStack = createStackNavigator({
  Location: EmptyScreen,
})

LocationStack.navigationOptions = {
  tabBarLabel: 'Locations',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-navigate${focused ? '' : '-outline'}`
          : 'md-navigate'
      }
    />
  ),
}

const CoCStack = createStackNavigator({
  Settings: EmptyScreen,
})

CoCStack.navigationOptions = {
  tabBarLabel: 'Codex',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
    />
  ),
}

export default createBottomTabNavigator(
  {
    SpeakerStack,
    ScheduleStack,
    HomeStack,
    LocationStack,
    CoCStack
  }, {
    initialRouteName: 'SpeakerStack',
    tabBarOptions: {
      activeTintColor: Colors.tabIconSelected,
      inactiveTintColor: Colors.tabIconDefault,
      style: {
        height: 55,
        backgroundColor: Colors.darkBlue,
        paddingTop: 5
      },
      labelStyle: {
        fontFamily: 'BloggerSans',
        fontSize: 12
      }
    }
  }
)
