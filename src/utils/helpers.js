// libs
import * as tf from '@tensorflow/tfjs'
import { tensor } from '@tensorflow/tfjs'
import { bundleResourceIO } from '@tensorflow/tfjs-react-native'
// constants
import { BITMAP_DIMENSION } from '../components/ExpoCamera/constants'

const modelJson = require('../assets/model/model.json')
const modelWeights = require('../assets/model/weights.bin')

const TENSORFLOW_CHANNEL = 1
export const getModel = async () => {
  try {
    // wait until tensorflow is ready
    await tf.ready()
    // load the trained model
    return await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights))
  } catch (error) {
    console.log('Could not load model', error)
  }
}

export const convertBase64ToTensor = async (props) => {
  try {
    return tensor(props, [1, BITMAP_DIMENSION, BITMAP_DIMENSION, TENSORFLOW_CHANNEL])
  } catch (error) {
    console.log('Could not convert base64 string to tensor', error)
  }
}
export const startPrediction = async (model, tensor) => {
  try {
    // predict against the model
    const output = await model.predict(tensor)
    // return typed array
    return output.dataSync()
  } catch (error) {
    console.log('Error predicting from tensor image', error)
  }
}
const LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y']
export const populateData = (typedArray) => {
  const predictions = Array.from(typedArray)

  return predictions.map((item, index) => {
    if (item > 0.2) {
      return {
        label: LABELS[Number(index)],
        prediction: item
      }
    } else return false
  }).filter(Boolean)
}
