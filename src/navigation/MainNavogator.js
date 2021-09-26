import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import AddNoteScreen from '../screens/AddNoteScreen';
import CustomButton from '../components/CustomButton';


const Stack = createStackNavigator();

const StackNav = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Main'
        component={MainScreen}
        options={({navigation}) => ({
          headerLeft: () => (
            <CustomButton
              icon='+'
              pressHandler={() => {navigation.navigate('AddNote', {task: 'new'})}}
            />
          )
        })}
      />
      <Stack.Screen
        name='AddNote'
        component={AddNoteScreen}
        options={({navigation: {goBack}}) => ({
          headerLeft: () => (
            <CustomButton
              icon='←'
              pressHandler={() => {goBack()}}
            />
          )
        })}
      />
    </Stack.Navigator>
  )
}


const MainNavigator = () => {
  return(
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  )
}


export default MainNavigator;