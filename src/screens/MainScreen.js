import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { removeNote, changeNoteIndex } from '../redux/notes';

import NoteCard from '../components/NoteCard';
import Footer from '../components/Footer';
import CustomButton from '../components/CustomButton';


const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const notes = useSelector((store) => store.notes);

  //Selecting note
  const [selectedNoteId, setSelectedNoteId] = useState('')
  const notePressHandler = (id) => {
    selectedNoteId !== id ? setSelectedNoteId(id) : setSelectedNoteId('');
  }
  
  
  //Button press handlers
  const removeSelectedNote = () => {
    dispatch(removeNote(selectedNoteId));
    setSelectedNoteId('');
  }
  const editSelectedNote = () => {
    const selectedNote = notes.filter((note) => note.id === selectedNoteId)[0];
    navigation.navigate('AddNote', {task: 'edit', note: selectedNote})
  }
  const moveSelectedNote = (direction) => {
    const selectedNote = notes.filter((note) => note.id === selectedNoteId)[0];
    const oldIndex = notes.indexOf(selectedNote);
    let newIndex
    if(direction === 'up'){
      newIndex = oldIndex === 0 ? 0 : oldIndex - 1;
    }
    if(direction === 'down'){
      newIndex = oldIndex === notes.length - 1 ? notes.length - 1 : oldIndex + 1;
    }
    dispatch(changeNoteIndex({oldIndex, newIndex}))
  }
  
  
  //Showing footer and buttons only if note is selected
  const [footerHeight, setFooterHeight] = useState(0);
  useEffect(() => {
    selectedNoteId ? setFooterHeight(60) : setFooterHeight(0);
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          {selectedNoteId ? <CustomButton icon='square-edit-outline' pressHandler={editSelectedNote}/> : <View></View>}
          {selectedNoteId ? <CustomButton icon='delete-outline' pressHandler={removeSelectedNote}/> : <View></View>}
        </View>
      )
    })
  },[selectedNoteId]);


  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.id}
        data={notes}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => {notePressHandler(item.id)}}>
              <NoteCard noteObj={item} style={selectedNoteId === item.id ? styles.selectedNote : {}}/>
            </TouchableOpacity>
        )}
      />
      <View style={{height: footerHeight}}>
        <Footer>
          <CustomButton icon='chevron-up' pressHandler={() => {moveSelectedNote('up')}}/>
          <CustomButton icon='chevron-down' pressHandler={() => {moveSelectedNote('down')}}/>
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
    backgroundColor: 'rgba(175,175,175,0.4)'
  }
})


export default MainScreen;