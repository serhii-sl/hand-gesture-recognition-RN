import { StyleSheet } from 'react-native'
// utils
import { dimension } from '../../utils/theme'

export const MASK_DIMENSION = 400

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  mask: {
    height: MASK_DIMENSION,
    width: MASK_DIMENSION,
    borderWidth: 3,
    borderColor: 'white',
    borderStyle: 'dotted',
    borderRadius: 15
  },
  flipButton: {
    position: 'absolute',
    height: 50,
    width: 40,
    top: 24,
    left: 12,
  },
  flipImage: {
    height: 50,
    width: 40,
  },
  shutterButton: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    width: 170,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#008ecf',
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#2dbbfc'
  },
  clearButton: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    width: 170,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#eb3141',
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#e3425a'
  },
  shutterButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  dataContainer: {
    position: 'absolute',
    width: dimension.deviceWidth,
    bottom: 100,
    left: 24
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
    color: 'gray'
  },
  recognizedText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white'
  },
  precisionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray'
  },
  precisionText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray'
  }
})
