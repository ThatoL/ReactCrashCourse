import { View, Text , StyleSheet, Image} from 'react-native'
import React from 'react'
import {elevation} from '../common/style'

export default function CategoryItem(props) {
    const {name, imageUrl} = props

  return (
    <View style={[styles.container, styles.elevation]}>
        <View style={styles.imageContainer}>
            <Image 
                source={imageUrl}
                style={styles.image}
            />
        </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    elevation,
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        backgroundColor: 'white',
        marginHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 35,
        height: 35,
    },
    imageContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginBottom: 5,
        backgroundColor: 'white',
    },
    text : {
        fontWeight: 'bold',
    }
})