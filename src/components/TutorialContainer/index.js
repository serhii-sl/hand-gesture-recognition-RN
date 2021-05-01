import React from 'react'
// components
import { FlatList, Text, View, Image } from 'react-native'
// styles
import { styles } from './views'
// constants
import { TUTORIAL_DATA } from './constants'

const TutorialItem = ({ src, title }) => (
  <View style={styles.itemContainer}>
    <Image style={styles.image} source={src} />
    <Text style={styles.title}>{title}</Text>
  </View>
)

const renderItem = ({ item }) => (
  <TutorialItem title={item.title} src={item.src} />
)

const TutorialContainer = () => (
  <View style={styles.container}>
    <FlatList
      data={TUTORIAL_DATA}
      renderItem={renderItem}
      numColumns={3}
      keyExtractor={item => item.id}
    />
  </View>
)

export default TutorialContainer
