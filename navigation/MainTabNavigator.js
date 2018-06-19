import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import ScheduleScreen from '../screens/ScheduleScreen'
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
  Schedule: ScheduleScreen,
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

const InformationStack = createStackNavigator({
  Settings: EmptyScreen,
})

InformationStack.navigationOptions = {
  tabBarLabel: 'Information',
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
    InformationStack
  }, {
    initialRouteName: 'ScheduleStack',
    tabBarOptions: {
      activeTintColor: Colors.tabIconSelected,
      inactiveTintColor: Colors.tabIconDefault,
      style: {
        height: 65,
        backgroundColor: Colors.darkBlue,
        paddingBottom: 5
      },
      labelStyle: {
        fontFamily: 'BloggerSans',
        fontSize: 12
      }
    }
  }
)
