import React, { useState } from 'react'
import { Box, Text, Pressable } from 'native-base'
import Class from '../../../viewModel/ElementosLista'
import database from '@react-native-firebase/database'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function ElementosLista() {
	const [Dados, setDados] = useState(Array)
	const VM = new Class()
	const navigation = useNavigation()

	database()
		.ref('/')
		.once('value', (snapshot) => {
			setDados(Object.keys(snapshot.val().elementos.templateTeste))
		})

	return (
		<Box backgroundColor={'amber.700'} flex={1} paddingTop={30}>
			{Dados.map((element) => (
				<Pressable
					onPress={() => {
						navigation.navigate('Formulario', element)
					}}
					mx={7}
					my={1}
					h={16}
					rounded={'3xl'}
					alignItems={'center'}
					justifyContent={'center'}
					backgroundColor={'indigo.50'}>
					<Text>{element}</Text>
				</Pressable>
			))}
		</Box>
	)
}
