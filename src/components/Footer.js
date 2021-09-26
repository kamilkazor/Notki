import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const Footer = ({children}) => {
  return (
    <View style={styles.footer}>
      {children}
    </View>
  )
}


const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 5
  }
})


export default Footer;