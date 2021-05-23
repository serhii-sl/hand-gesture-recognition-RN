import React from 'react'
// libs
import { Camera } from 'expo-camera'
import * as ImageManipulator from 'expo-image-manipulator'
import { Image as CanvasImage } from 'react-native-canvas'
// constants
import { MASK_DIMENSION } from '../components/ExpoCamera/views'
import { BITMAP_DIMENSION } from '../components/ExpoCamera/constants'
// utils
import { dimension } from '../utils/theme'
import { convertBase64ToTensor, getModel, populateData, startPrediction } from '../utils/helpers'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const useCamera = () => {
  const cameraRef = React.useRef(null)

  const [hasPermission, setHasPermission] = React.useState(false)
  const [isCameraReady, setIsCameraReady] = React.useState(false)
  const [cropperImageUri, setCropperImageUri] = React.useState('')
  const [grayStyleImageData, setGrayStyleImageData] = React.useState([])
  const [recognizedText, setRecognizedText] = React.useState('')

  const onCameraReady = () => {
    setIsCameraReady(true)
  }

  const clearFields = () => {
    setRecognizedText('')
  }

  const cropPicture = async (imageData, maskDimension) => {
    try {
      const { uri, width, height } = imageData
      const cropWidth = maskDimension * (width / dimension.deviceWidth)
      const cropHeight = maskDimension * (height / dimension.deviceHeight)
      const actions = [
        {
          crop: {
            originX: width / 2 - cropWidth / 2,
            originY: height / 2 - cropHeight / 2,
            width: cropWidth,
            height: cropHeight
          }
        },
        {
          resize: {
            width: BITMAP_DIMENSION,
            height: BITMAP_DIMENSION
          }
        }
      ]
      const saveOptions = {
        compress: 1,
        base64: true
      }
      return await ImageManipulator.manipulateAsync(uri, actions, saveOptions)
    } catch (error) {
      console.log('Could not crop & resize photo', error)
    }
  }

  const options = {
    quality: 0.1,
    fixOrientation: true,
    base64: true
  }

  const takePicture = async () => {
    try {
      return await cameraRef.current.takePictureAsync(options)
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

  const handlePictureProcessing = async () => {
    const data = await takePicture()

    const cropperImageUri = await cropPicture({
      uri: data.uri,
      width: data.width,
      height: data.height
    }, MASK_DIMENSION)


    setCropperImageUri(cropperImageUri)
    const model = await getModel()
    const tensor = await convertBase64ToTensor(grayStyleImageData)


    const typedArray = await startPrediction(model, tensor)

    console.log(populateData(typedArray))
    setCropperImageUri(cropperImageUri)
  }


  const handleCanvas = React.useCallback(async (canvas) => {
    if (canvas && cropperImageUri) {
      const image = new CanvasImage(canvas)
      canvas.width = 28
      canvas.height = 28

      const context = canvas.getContext('2d')

      image.src = `data:image/jpeg;base64,${cropperImageUri.base64}`

      image.addEventListener('load', () => {
        context.drawImage(image, 0, 0, 28, 28)
      })
      await sleep(100)

      let imageData = await context.getImageData(0, 0, 28, 28)
      const RGBAValues = Object.values(imageData.data)

      const grayStyleArray = []

      for (let i = 0; i < RGBAValues.length; i += 4) {
        let avg = Number((((RGBAValues[i] + RGBAValues[i + 1] + RGBAValues[i + 2]) / 3) / 255).toFixed(2))

        imageData.data[i] = avg
        imageData.data[i + 1] = avg
        imageData.data[i + 2] = avg

        grayStyleArray.push(avg)
      }
      context.putImageData(imageData, 0, 0)
      setGrayStyleImageData(grayStyleArray)
    }
  }, [cropperImageUri])

  return {
    cameraRef,
    isCameraReady,
    recognizedText,
    hasPermission,
    onCameraReady,
    handleCanvas,
    cropperImageUri,
    handlePictureProcessing,
    clearFields
  }
}
