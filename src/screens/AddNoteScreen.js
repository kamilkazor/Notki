import React  from 'react';
import {View, TextInput, StyleSheet, ScrollView} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { setAddNoteState } from '../redux/addNoteState'


const AddNoteScreen = () => {
  const addNoteState = useSelector((store) => store.addNoteState);
  const dispatch = useDispatch()


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <TextInput
            style={styles.titleInput}
            multiline={true}
            value={addNoteState.titleInput}
            onChangeText={(value) => {dispatch(setAddNoteState({titleInput: value}))}}
          />
        </View>
        <View style={styles.contentContainer}>
          <TextInput
            style={styles.contentInput}
            multiline={true}
            value={addNoteState.contentInput}
            onChangeText={(value) => {dispatch(setAddNoteState({contentInput: value}))}}
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
    paddingVertical: 10
  },
  titleInput: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  contentInput: {
    flex: 1,
    fontSize: 20
  }
})


export default AddNoteScreen;