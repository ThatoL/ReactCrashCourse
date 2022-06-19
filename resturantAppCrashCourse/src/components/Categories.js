import { FlatList } from 'react-native'
import React from 'react'
// import { FlatList } from 'react-native-web'
import CategoryItem from './CategoryItem'

export default function Categories(props) {
    const { categories, setTerm, term } = props;
  return (
    <FlatList
        keyExtractor={(category) => category.name} 
        horizontal
        showsHorizontalScrollIndicator={false}
        data= {categories}
        renderItem={({item, index})=> {
          return (<CategoryItem 
            name={item.name}
            imageUrl={item.imageUrl}
            index={index}
            active={item.name == term}
            handlePress={() => setTerm(item.name)}
            term={term}
          />)
        }}
      />
  )
}