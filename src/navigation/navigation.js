import * as React from 'react'
// libs
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
// screens
import Home from '../screens/Home'
import Profile from '../screens/Profile'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MyTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name='Home'
      component={Home}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Icon name={'ios-home'} size={25} color={color} />
        }
      }}
    />
    <Tab.Screen
      name='Profile'
      component={Profile}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Icon name={'ios-settings'} size={25} color={color} />
        }
      }}
    />
  </Tab.Navigator>
)


const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Home' component={MyTabs} />
    </Stack.Navigator>
  </NavigationContainer>
)


export default MainNavigation
