import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomButton = ({icon, pressHandler}) => {
  return(
    <TouchableOpacity style={styles.customButton} onPress={pressHandler}>
      <Icon name={icon} size={30}/>
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