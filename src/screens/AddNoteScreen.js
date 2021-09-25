import React, {useEffect}  from 'react';
import {View, TextInput, StyleSheet, ScrollView} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { setNewNote } from '../redux/newNote';
import { addNewNote } from '../redux/notes';

import HeaderButton from '../components/HeaderButton';


const AddNoteScreen = ({ navigation }) => {
  const newNote = useSelector((store) => store.newNote);
  const dispatch = useDispatch()

  const clearState = () => {
    dispatch(setNewNote({
      titleText: '',
      contentText: ''
    }))
  }
  const confirmNote = () => {
    dispatch(addNewNote(newNote));
    navigation.goBack();
    clearState();
  }
  

  useEffect(() => {
    const noteId = Date.now().toString();
    dispatch(setNewNote({id: noteId}))
  },[])

  //Adding functional buttons inside header.
  //Has to be udated after state change to pass current state inside pressHandlers
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <HeaderButton
            icon='c'
            pressHandler={clearState}
            />
          <HeaderButton
            icon='ok'
            pressHandler={confirmNote}
            />
        </View>
      )
    })
  },[newNote]);
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <TextInput
            style={styles.titleInput}
            multiline={true}
            value={newNote.titleText}
            onChangeText={(value) => {dispatch(setNewNote({titleText: value}))}}
          />
        </View>
        <View style={styles.contentContainer}>
          <TextInput
            style={styles.contentInput}
            multiline={true}
            value={newNote.contentText}
            onChangeText={(value) => {dispatch(setNewNote({contentText: value}))}}
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