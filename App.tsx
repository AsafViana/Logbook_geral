import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {NativeBaseProvider, Text} from 'native-base'
import Routes from './src/routes'
import {
  StatusBar
} from 'react-native';

export default function App() {
  return (
      <NavigationContainer>
      <NativeBaseProvider>
        <Routes/>
      </NativeBaseProvider>
    </NavigationContainer>
    
  );
}