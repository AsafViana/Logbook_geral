import React from 'react'
import { Box, Text, Pressable } from 'native-base'
import { Platform, Button } from 'react-native'

export default function ElementosLista() {
	const Dados = ['elemento1', 'elemento2', 'elemento3']
	return (
		<Box backgroundColor={'amber.700'} flex={1} paddingTop={30}>
			{Dados.map((element) => (
				<Pressable onPress={() => console.log(element)} mx={7} my={1} h={16} rounded={'3xl'} alignItems={'center'} justifyContent={'center'} backgroundColor={'indigo.50'}>
					<Text>{element}</Text>
				</Pressable>
			))}
		</Box>
	)
}
