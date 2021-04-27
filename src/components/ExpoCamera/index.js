import React from 'react'
// libs
import { Camera } from 'expo-camera'
// hooks
import { useCamera } from '../../hooks/useCamera'
// components
import { Text, View } from 'react-native'
// styles
import { styles } from './views'

const ExpoCamera = () => {
  const { cameraRef, hasPermission, isCameraReady, onCameraReady } = useCamera()

  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={(ref) => {
          cameraRef.current = ref
        }}
        type={Camera.Constants.Type.back}
        onCameraReady={onCameraReady}>
        {isCameraReady && (
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
        )}
      </Camera>
    </View>
  )
}

export default ExpoCamera
