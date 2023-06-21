import { Center, Text, Box, Select, CheckIcon } from 'native-base'
import React, { useState, useEffect, useCallback } from 'react'
import { Platform } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import {color} from '../../../env.json'
import { onValue, ref, database, get } from '../../service/firebaseConfig'
import { Teste, Elemento, Lote } from '../../service/interfaces'

export default function index(props) {
	const {} = props

	const pegaDados = useCallback(() => {
		onValue(ref(database, 'elementos/' + elemento), (snapshot) => {
			const data: Elemento = { ...snapshot.val() }
		})
	}, [])

	useEffect(() => {
		pegaDados()
		console.log('ElementoVisualizacao')
	}, [])

	return (
		<Box flex={1} p={10} backgroundColor={color.CorEscura}>
			<Text fontSize={'5xl'} color={color.Branco} pb={5} fontFamily={'poppinsEBold'}>
				index
			</Text>
			<Select
				shadow={'9'}
				bgColor={color.CorMedia}
				minWidth="200"
				placeholder="seu@email.com"
				w={'100%'}
				fontSize={17}
				rounded={'2xl'}
				borderColor={color.Branco}
				borderWidth={3}
				color={color.Branco}
				_selectedItem={{
					bg: 'teal.600',
					endIcon: <CheckIcon size={5} />,
				}}
				mt="1">

				<Select.Item label="One" value="one" />
			</Select>
		</Box>
	)
}
