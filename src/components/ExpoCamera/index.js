import React from 'react'
// libs
import { Camera } from 'expo-camera'
import Canvas from 'react-native-canvas'
// hooks
import { useCamera } from '../../hooks/useCamera'
// components
import { Text, View, TouchableOpacity } from 'react-native'
// styles
import { styles } from './views'

const ExpoCamera = () => {
  const { cameraRef, hasPermission, isCameraReady, onCameraReady, handlePictureProcessing, handleCanvas} = useCamera()

  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <Camera
      ref={(ref) => {
        cameraRef.current = ref
      }}
      type={Camera.Constants.Type.back}
      onCameraReady={onCameraReady}>
      {isCameraReady && (

        <View style={styles.container}>
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
            onPress={() => {
            }}>
            <Text style={styles.shutterButtonText}>
              Clear
            </Text>
          </TouchableOpacity>
          <View style={styles.dataContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.recognizedTitle}>recognized text: </Text>
              <Text style={styles.recognizedText}>aloha</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.precisionTitle}>precision: </Text>
              <Text style={styles.precisionText}>0.99</Text>
            </View>
          </View>
          <Canvas ref={handleCanvas}/>
        </View>
      )}
    </Camera>
  )
}

export default ExpoCamera
