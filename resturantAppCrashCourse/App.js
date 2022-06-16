import {View , Text, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App(){
  return (
    <View style={styles.container}>
    <Text>Hello World</Text>
    <StatusBar />
    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
