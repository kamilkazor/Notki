import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const Footer = ({children}) => {
  return (
    <View style={styles.footer}>
      {children}
    </View>
  )
}

const FooterButton = ({icon, pressHandler}) => {
  return (
    <TouchableOpacity style={styles.FooterButton} onPress={pressHandler}>
      <Text>{icon}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  FooterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 60
  }
})


export default Footer;
export {FooterButton};