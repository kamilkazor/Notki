import React, {useEffect, useState, useRef}  from 'react';
import {View, TextInput, StyleSheet, ScrollView} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { setNewNote } from '../redux/newNote';
import { setEditedNote } from '../redux/editedNote';
import { addNewNote, updateNote } from '../redux/notes';

import HeaderButton from '../components/HeaderButton';


const AddNoteScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const notes = useSelector((store) => store.notes);
  
  
  //Changing states and handlers depending on the task
  const task = useRef(route.params.task).current;

  const confirmNewNote = () => {
    const noteId = Date.now().toString();
    dispatch(addNewNote({...noteState, id: noteId}));
    navigation.goBack();
    clearHandler();
  }
  const confirmEditedNote = () => {
    dispatch(updateNote(noteState));
    navigation.goBack();
    clearHandler();
  }

  let noteState = task === 'edit' ? useSelector((store) => store.editedNote) : useSelector((store) => store.newNote);
  let setNoteState = task === 'edit' ? (newState) => dispatch(setEditedNote(newState)) : (newState) => dispatch(setNewNote(newState));
  let clearHandler = () => setNoteState({titleText: '', contentText: ''});
  let confirmHandler = task === 'edit' ? confirmEditedNote : confirmNewNote;
  
  useEffect(() => {
    if(task === 'edit'){
      const oldNote = route.params.note;
      setNoteState(oldNote);
    }
  },[])


  //Adding functional buttons inside header.
  //Has to be udated after state change to pass current state inside pressHandlers
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <HeaderButton
            icon='c'
            pressHandler={clearHandler}
            />
          <HeaderButton
            icon='ok'
            pressHandler={confirmHandler}
            />
        </View>
      )
    })
  },[noteState]);
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <TextInput
            style={styles.titleInput}
            multiline={true}
            value={noteState.titleText}
            onChangeText={(value) => {setNoteState({titleText: value})}}
          />
        </View>
        <View style={styles.contentContainer}>
          <TextInput
            style={styles.contentInput}
            multiline={true}
            value={noteState.contentText}
            onChangeText={(value) => {setNoteState({contentText: value})}}
          />
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingVertical: 10
  },
  contentContainer: {
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  titleInput: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  contentInput: {
    fontSize: 20
  }
})


export default AddNoteScreen;