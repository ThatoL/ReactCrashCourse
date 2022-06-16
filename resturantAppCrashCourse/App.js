import {View , StyleSheet, FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';
import Search from './src/components/Search';
import CategoryItem from './src/components/CategoryItem';

export default function App(){
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
      <Search />
      <FlatList
        keyExtractor={(category) => category.name} 
        horizontal
        showsHorizontalScrollIndicator={false}
        data= {commonCategories}
        renderItem={({item, index})=> {
          return (<CategoryItem 
            name={item.name}
            imageUrl={item.imageUrl}
            index={index}
          />)
        }}
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
