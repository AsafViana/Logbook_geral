import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/routes/index'
import {color} from './env.json'
import 'react-native-gesture-handler'
import { Poppins_800ExtraBold as poppinsEBold, Poppins_400Regular as poppins, Poppins_600SemiBold as poppinsSemi, useFonts } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'

export default function App() {
	LogBox.ignoreAllLogs()
	let [fontsLoaded] = useFonts({
		poppinsEBold,
		poppins,
		poppinsSemi
	})
  if (!fontsLoaded) return <AppLoading />
  else
		return (
			<SafeAreaProvider style={{ backgroundColor: color.CorEscura }}>
				<SafeAreaView style={{ flex: 1 }}>
					<NativeBaseProvider>
						<Routes />
						<StatusBar style="light" backgroundColor={color.CorEscura} />
					</NativeBaseProvider>
				</SafeAreaView>
			</SafeAreaProvider>
		)
}

