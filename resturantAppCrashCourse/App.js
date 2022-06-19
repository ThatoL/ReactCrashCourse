import {View , StyleSheet} from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';
import Search from './src/components/Search';
import CategoryItem from './src/components/CategoryItem';
import Categories from './src/components/Categories';

export default function App(){
  const [term , setTerm] = useState('');
  const commonCategories = [
    {
      name:'cake',
      imageUrl:require('./src/assets/images/cake-slice.png')
    },
    {
      name:'drinks',
      imageUrl:require('./src/assets/images/cocktail.png')
    },
    {
      name:'burger',
      imageUrl:require('./src/assets/images/hamburger.png')
    },
    {
      name:'meat',
      imageUrl:require('./src/assets/images/meat.png')
    },
    {
      name:'snacks',
      imageUrl:require('./src/assets/images/nachos.png')
    },
    {
      name:'pizza',
      imageUrl:require('./src/assets/images/pizza.png')
    }
  ]

  return (
    <View style={styles.container}>
      <Header/>
      <Search 
        setTerm={setTerm}
        term={term}
      />
      <Categories
        categories={commonCategories}
        setTerm={setTerm}
        term={term}
      />

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
