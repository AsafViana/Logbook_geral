import { Pressable, Text, Divider } from 'native-base'
import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { color } from '../../../env.json'
import { useNavigation } from '@react-navigation/native'

export default function index({ nome, data, elemento, nl, index }) {
	const navigation = useNavigation()

	const handlePress = () => {
		navigation.navigate('Testes', { data: data, elemento: elemento, nl: nl, index: index })
	}

	return (
		<Pressable onPress={handlePress} flex={1} bgColor={color.CorClara} my={6} py="4" px="10" rounded="3xl" width={375} maxWidth="100%">
			<Text fontSize={'2xl'} fontFamily={'poppinsEBold'} color={color.Branco}>
				{'NL: '}
				<Text fontSize={'2xl'} fontFamily={'poppinsSemi'}>
					{nome}
				</Text>
			</Text>
			<Divider my="2" bgColor={color.CorMedia} thickness="3" />
			<Text fontFamily={'poppins'} color={color.Branco}>
				{'Validade: '}
				<Text fontFamily={'poppinsSemi'}>{data}</Text>
			</Text>
		</Pressable>
	)
}
