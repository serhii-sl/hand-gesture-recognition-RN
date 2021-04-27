import * as React from 'react'
// libs
import {
  SafeAreaView,
  StatusBar
} from 'react-native'
// components
import TutorialContainer from '../../components/TutorialContainer'
// styles
import { styles } from '../Camera/views'

const Tutorial = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView}>
        <TutorialContainer />
      </SafeAreaView>
    </>
  )
}

export default Tutorial
