import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Button} from 'react-native';

import { useSelector } from 'react-redux';

import NoteCard from '../components/NoteCard';
import Footer, {FooterButton} from '../components/Footer';


const MainScreen = () => {
  const [footerHeight, setFooterHeight] = useState(0);

  const showHideFooter = () => {
    const newFooterHeight = footerHeight === 0 ? 60 : 0;
    setFooterHeight(newFooterHeight);
  }


  const notes = useSelector((store) => store.notes);

  return (
    <View style={styles.container}>
      <Button title='show footer' onPress={showHideFooter}/>
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.id}
        data={notes}
        renderItem={({item}) => (
          <NoteCard text={item.text}/>
        )}
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
  }
})


export default MainScreen;