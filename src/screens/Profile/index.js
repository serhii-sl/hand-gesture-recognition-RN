import * as React from 'react'
// libs
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
// styles
import { styles } from '../Home/views'

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.outerWrapper}>
          <Icon name={'ios-settings'} size={100} color={'green'} />
        </View>
      </SafeAreaView>
    </>
  )
}

export default Home
