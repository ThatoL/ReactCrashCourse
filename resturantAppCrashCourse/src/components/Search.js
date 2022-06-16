import { View, Text , StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import {elevation} from '../common/style'

export default function Search() {
  return (
    <View style={[styles.container, elevation]}>
        <FontAwesome name='search'
            size={25}
        />
        <TextInput
            placeholder='Restaurant, Food'
            style={styles.input}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    elevation,
    container: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 40,
    },
    
    input : {
        fontSize: 20,
        marginLeft: 10,
    }
})