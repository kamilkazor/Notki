import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import { useSelector } from 'react-redux';

import NoteCard from '../components/NoteCard';


const MainScreen = () => {
  const notes = useSelector((store) => store.notes);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.id}
        data={notes}
        renderItem={({item}) => (
          <NoteCard text={item.text}/>
        )}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1
  }
})


export default MainScreen;