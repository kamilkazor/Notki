import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { removeNote } from '../redux/notes';

import NoteCard from '../components/NoteCard';
import Footer, {FooterButton} from '../components/Footer';


const MainScreen = () => {
  const dispatch = useDispatch();
  const notes = useSelector((store) => store.notes);

  //Selecting note
  const [selectedNoteId, setSelectedNoteId] = useState('')
  const notePressHandler = (id) => {
    selectedNoteId !== id ? setSelectedNoteId(id) : setSelectedNoteId('');
  }
  
  //Showing footer if note is selected
  const [footerHeight, setFooterHeight] = useState(0);
  useEffect(() => {
    selectedNoteId === '' ? setFooterHeight(0) : setFooterHeight(60)
  }, [selectedNoteId])
  

  const removeSelectedNote = () => {
    dispatch(removeNote(selectedNoteId));
    setSelectedNoteId('');
  }


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
        )}
      />
      <View style={{height: footerHeight}}>
        <Footer>
          <FooterButton icon='Delete' pressHandler={() => {removeSelectedNote()}}/>
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