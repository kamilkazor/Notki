import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { removeNote, changeNoteIndex } from '../redux/notes';

import NoteCard from '../components/NoteCard';
// import Footer, {FooterButton} from '../components/Footer';
import HeaderButton from '../components/HeaderButton';


const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const notes = useSelector((store) => store.notes);

  //Selecting note
  const [selectedNoteId, setSelectedNoteId] = useState('')
  const notePressHandler = (id) => {
    selectedNoteId !== id ? setSelectedNoteId(id) : setSelectedNoteId('');
  }
  
  //Showing footer if note is selected
  // const [footerHeight, setFooterHeight] = useState(0);
  // useEffect(() => {
  //   selectedNoteId === '' ? setFooterHeight(0) : setFooterHeight(60)
  // }, [selectedNoteId])
  

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


  //Selected note buttons will be shown only if note is selected
  useEffect(() => {
    if(selectedNoteId) {
      navigation.setOptions({
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <HeaderButton
              icon='ed'
              pressHandler={editSelectedNote}
            />
            <HeaderButton
              icon='del'
              pressHandler={removeSelectedNote}
            />
          </View>
        )
      })
    }
    else {
      navigation.setOptions({
        headerRight: () => (<View></View>)
      })
    }
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
      {/* <View style={{height: footerHeight}}>
        <Footer>
          <FooterButton icon='Delete' pressHandler={() => {removeSelectedNote()}}/>
        </Footer>
      </View> */}
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