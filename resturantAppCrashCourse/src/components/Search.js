import { View, StyleSheet, TextInput,} from 'react-native'
import { useState} from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import {elevation} from '../common/style'

export default function Search(props) {
    const [input , setInput] = useState('');
    const { setTerm } = props;

    const handleEndEditing = () => {
        if (!input) return;
        setTerm(input)
        setInput('')
    }

  return (
    <View style={[styles.container, elevation]}>
        <FontAwesome name='search'
            size={25}
        />
        <TextInput
            //2 way binding
            value={input}
            //updates state when text changes
            onChangeText={(text)=>{setInput(text)}}
            onEndEditing={()=>{return (handleEndEditing())}}
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