import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


const HeaderButton = ({icon, pressHandler}) => {
  return(
    <TouchableOpacity style={styles.headerButton} onPress={pressHandler}>
      <Text>{icon}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  headerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 60
  }
})

export default HeaderButton;