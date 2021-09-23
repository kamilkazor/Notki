import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Button, TouchableOpacity} from 'react-native';

import { useSelector } from 'react-redux';

import NoteCard from '../components/NoteCard';
import Footer, {FooterButton} from '../components/Footer';


const MainScreen = () => {
  const notes = useSelector((store) => store.notes);
  const [selectedNoteId, setSelectedNoteId] = useState('')

  const notePressHandler = (id) => {
    selectedNoteId !== id ? setSelectedNoteId(id) : setSelectedNoteId('');
  }
  
  const [footerHeight, setFooterHeight] = useState(0);

  const showHideFooter = () => {
    const newFooterHeight = footerHeight === 0 ? 60 : 0;
    setFooterHeight(newFooterHeight);
  }



  return (
    <View style={styles.container}>
      <Button title='show footer' onPress={showHideFooter}/>
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
    backgroundColor: 'red'
  }
})


export default MainScreen;