import * as React from 'react'
// libs
import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
// navigation
import MainNavigation from './navigation/navigation'
// providers
import { Provider } from 'react-redux'
// store
import { store } from './stores'

enableScreens()

const App = () => (
  <>
    {/*<Provider store={store}>*/}
    <MainNavigation />
    {/*</Provider>*/}
  </>
)


export default App
