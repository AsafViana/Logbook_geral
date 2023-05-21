import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/screen/Home'
import {color} from './env.json'
import 'react-native-gesture-handler'

export default function App() {
	LogBox.ignoreAllLogs()
  return (
		<SafeAreaProvider style={{ backgroundColor: color.CorEscura }}>
			<SafeAreaView style={{ flex: 1 }}>
				<NativeBaseProvider>
					<Routes />
					<StatusBar style="light" />
				</NativeBaseProvider>
			</SafeAreaView>
		</SafeAreaProvider>
  )
}

