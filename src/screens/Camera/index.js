import * as React from 'react'
// libs
import {
  View,
  SafeAreaView,
  StatusBar
} from 'react-native'
import ExpoCamera from '../../components/ExpoCamera'
// styles
import { styles } from './views'

const Camera = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView}>
        <View>
          <ExpoCamera />
        </View>
      </SafeAreaView>
    </>
  )
}


export default Camera
