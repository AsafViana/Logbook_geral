import { Pressable, Text, Divider } from 'native-base'
import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { color } from '../../../env.json'
import { useNavigation } from '@react-navigation/native'

export default function index({ nome, data, elemento }) {
	const navigation = useNavigation()

	const handlePress = () => {
		navigation.navigate('TesteDetalhes', { Data: data, Elemento: elemento })
	}
	const [Data, setData] = useState()
	const [Hora, setHora] = useState()

	useEffect(() => {
		const dataArray = data.split(' ')
		setData(dataArray[0])
		setHora(dataArray[1])
	}, [])

	return (
		<Pressable onPress={handlePress} flex={1} bgColor={color.CorClara} my={6} py="4" px="10" rounded="3xl" width={375} maxWidth="100%">
			<Text fontSize={'2xl'} fontFamily={'poppinsEBold'} color={color.Branco}>
				{nome}
			</Text>
			<Divider my="2" bgColor={color.CorMedia} thickness="3" />
			<Text fontFamily={'poppins'} color={color.Branco}>
				{'Data: '}
				<Text fontFamily={'poppinsSemi'}>{Data}</Text>
			</Text>
			<Text fontFamily={'poppins'} color={color.Branco}>
				{'Hora: '}
				<Text fontFamily={'poppinsSemi'}>{Hora}</Text>
			</Text>
		</Pressable>
	)
}
