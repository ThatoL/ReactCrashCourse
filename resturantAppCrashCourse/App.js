import {View , Text, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';
import Search from './src/components/Search';
import CategoryItem from './src/components/CategoryItem';

export default function App(){
  return (
    <View style={styles.container}>
    <Header/>
    <Search />
    <CategoryItem />
    <StatusBar />
    </View>

  )
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // }
})
