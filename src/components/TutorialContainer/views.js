import { StyleSheet } from 'react-native'
// utils
import { dimension } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    width: dimension.deviceWidth,
    marginTop: 12,
    marginBottom: 12
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    width: dimension.deviceWidth / 3,
    paddingTop: 20
  },
  image: {
    width: 90,
    height: 88,
    borderRadius: 6,
    backgroundColor: '#e0e0e0'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold'
  }
})
