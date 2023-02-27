import React, { useState } from 'react'
import { Box, Text, Fab, Button } from 'native-base'
import { Entypo } from '@expo/vector-icons'
import Class from '../../../viewModel/ElementosTestados/'
import { useNavigation } from '@react-navigation/native'

export default function ListaTestados() {
	const [corFab, setCorFab] = useState('orange.500')
	const navigation = useNavigation()
	const VM = new Class()

	return (
		<Box backgroundColor={'amber.700'} safeArea flex={1} p={10}>
			<Fab onPressIn={() => setCorFab('orange.900')} 
			onPressOut={() => setCorFab('orange.500')} 
			onPress={() => navigation.navigate('ElementosLista')} 
			bgColor={corFab} renderInPortal={false} shadow={2} 
			icon={<Entypo color="white" name="plus" size={40} />} 
			margin={'6'} />
		</Box>
	)
}
