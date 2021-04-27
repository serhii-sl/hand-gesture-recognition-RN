import * as React from 'react'
// libs
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
// screens
import Camera from '../screens/Camera'
import Tutorial from '../screens/Tutorial'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const ICON_SIZE = 36

const MyTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name='Camera'
      component={Camera}
      options={{
        tabBarIcon: ({ color }) => {
          return <Icon name={'ios-camera'} size={ICON_SIZE} color={color} />
        }
      }}
    />
    <Tab.Screen
      name='Tutorial'
      component={Tutorial}
      options={{
        tabBarIcon: ({ color }) => {
          return <Icon name={'ios-information-circle'} size={ICON_SIZE} color={color} />
        }
      }}
    />
  </Tab.Navigator>
)


const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Main' component={MyTabs} />
    </Stack.Navigator>
  </NavigationContainer>
)


export default MainNavigation
