import { StyleSheet } from 'react-native'
// utils
import { dimension } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: '100%'
  },
  camera: {
    flex: 1,
    position: 'relative'
  },
  dataContainer: {
    position: 'absolute',
    width: dimension.deviceWidth,
    bottom: 60,
    left: 24,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  recognizedTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'gray',
  },
  recognizedText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  precisionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
  },
  precisionText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
  }
})
