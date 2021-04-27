import * as React from 'react'
// libs
import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
// navigation
import MainNavigation from './navigation/navigation'

enableScreens()

const App = () => <MainNavigation />

export default App
