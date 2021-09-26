import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


const CustomButton = ({icon, pressHandler}) => {
  return(
    <TouchableOpacity style={styles.customButton} onPress={pressHandler}>
      <Text>{icon}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  customButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 60
  }
})

export default CustomButton;