import * as React from 'react'
// libs
import {
  SafeAreaView,
  View,
  StatusBar
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
// styles
import { styles } from './views'

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.outerWrapper}>
          <Icon name={'ios-home'} size={100} color={'purple'} />
        </View>
      </SafeAreaView>
    </>
  )
}


export default Home
