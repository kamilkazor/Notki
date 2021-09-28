import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import AddNoteScreen from '../screens/AddNoteScreen';
import CustomButton from '../components/CustomButton';


const Stack = createStackNavigator();

const StackNav = () => {
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        elevation: 5,
      },
      headerTitleStyle: {
        fontSize: 25
      },
      ...TransitionPresets.SlideFromRightIOS
    }}
    >
      <Stack.Screen
        name='Main'
        component={MainScreen}
        options={({navigation}) => ({
          title: 'Notes',
          headerLeft: () => (
            <CustomButton
              icon='plus'
              pressHandler={() => {navigation.navigate('AddNote', {task: 'new'})}}
            />
          )
        })}
      />
      <Stack.Screen
        name='AddNote'
        component={AddNoteScreen}
        options={({navigation: {goBack}}) => ({
          title: '',
          headerLeft: () => (
            <CustomButton
              icon='arrow-left'
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