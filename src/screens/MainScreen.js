import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import { useSelector } from 'react-redux';

import NoteCard from '../components/NoteCard';
import Footer, {FooterButton} from '../components/Footer';


const MainScreen = () => {
  const notes = useSelector((store) => store.notes);

  const [selectedNoteId, setSelectedNoteId] = useState('')
  
  const notePressHandler = (id) => {
    selectedNoteId !== id ? setSelectedNoteId(id) : setSelectedNoteId('');
  }
  

  //Showing footer if note is selected
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    selectedNoteId === '' ? setFooterHeight(0) : setFooterHeight(60)
  }, [selectedNoteId])


  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.id}
        data={notes}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => {notePressHandler(item.id)}}>
              <NoteCard text={item.text} style={selectedNoteId === item.id ? styles.selectedNote : {}}/>
            </TouchableOpacity>
        )
      }
      />
      <View style={{height: footerHeight}}>
        <Footer>
          <FooterButton icon='A' pressHandler={() => {console.log('clickedA')}}/>
          <FooterButton icon='B' pressHandler={() => {console.log('clickedB')}}/>
          <FooterButton icon='C' pressHandler={() => {console.log('clickedC')}}/>
        </Footer>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1
  },
  selectedNote: {
    backgroundColor: 'lightgrey'
  }
})


export default MainScreen;