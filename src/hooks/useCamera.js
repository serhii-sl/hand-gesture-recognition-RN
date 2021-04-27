import React from 'react'
// libs
import { Camera } from 'expo-camera'

export const useCamera = () => {
  const cameraRef = React.useRef(null)

  const [hasPermission, setHasPermission] = React.useState(false)
  const [isCameraReady, setIsCameraReady] = React.useState(false)
  const [base64Image, setBase64Image] = React.useState('')

  const onCameraReady = () => {
    setIsCameraReady(true)
  }

  const takePicture = async () => {
    try {
      const data = await cameraRef.current.takePictureAsync({
        base64: true
      })
      setBase64Image(data.uri)
      console.log('Path to image: ' + base64Image)
    } catch (err) {
      console.log('err: ', err)
    }
  }

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  React.useEffect(() => {
    let timer = null

    if (isCameraReady) {
      timer = setInterval(() => {
        takePicture()
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isCameraReady])

  return {
    cameraRef,
    hasPermission,
    onCameraReady,
    isCameraReady
  }
}
