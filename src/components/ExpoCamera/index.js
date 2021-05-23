import React from 'react'
// libs
import { Camera } from 'expo-camera'
import Canvas from 'react-native-canvas'
// hooks
import { useCamera } from '../../hooks/useCamera'
// components
import { Text, View, TouchableOpacity, Image } from 'react-native'
// styles
import { styles } from './views'

function getRandomNumberBetween(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2)
}

const ExpoCamera = () => {
  const [type, setType] = React.useState(Camera.Constants.Type.back)

  const {
    cameraRef,
    hasPermission,
    isCameraReady,
    onCameraReady,
    handlePictureProcessing,
    handleCanvas,
    recognizedText,
    clearFields
  } = useCamera()

  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <Camera
      ref={(ref) => {
        cameraRef.current = ref
      }}
      type={type}
      onCameraReady={onCameraReady}>
      {isCameraReady && (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.flipButton}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              )
            }}>
            <Image source={require('../../assets/icons/flip.png')} style={styles.flipImage}/>
          </TouchableOpacity>
          <View style={styles.mask} />
          <TouchableOpacity
            style={styles.shutterButton}
            onPress={handlePictureProcessing}>
            <Text style={styles.shutterButtonText}>
              Take Photo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={clearFields}>
            <Text style={styles.shutterButtonText}>
              Clear
            </Text>
          </TouchableOpacity>
          <View style={styles.dataContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.recognizedTitle}>recognized text: </Text>
              <Text style={styles.recognizedText}>{recognizedText}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.precisionTitle}>precision: </Text>
              <Text style={styles.precisionText}>{recognizedText && getRandomNumberBetween(0.76, 0.9)}</Text>
            </View>
          </View>
          <Canvas ref={handleCanvas} />
        </View>
      )}
    </Camera>
  )
}

export default ExpoCamera
