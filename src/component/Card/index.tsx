import { Center, Text, Box, VStack, Image, HStack, Pressable, Button } from 'native-base'
import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import { Entypo, FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons'
import { color } from '../../../env.json'
import { useNavigation } from '@react-navigation/native'
import { Poppins_800ExtraBold as poppins, useFonts } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'

export default function index({ nome, quantidadeDeTestes, sigla }) {
	let [fontsLoaded] = useFonts({
		poppins,
	})
	//const navigation = useNavigation()

	const handlePress = () => {
		//navigation.navigate('DetalhesItem', { item: nome })
	}

	const breakLine = (text, character) => {
		const regex = new RegExp(`(.{1,${character}})(?:\\s|$)`, 'g')
		const lines = text.match(regex) || []
		return lines.join('\n')
	}

	if(!fontsLoaded) return <AppLoading/>
	else return (
		<Pressable bgColor={color.CorClara} my={6} py="4" px="10" rounded="3xl" width={375} maxWidth="100%">
			<HStack justifyContent="space-between" alignItems={'center'}>
				<Box justifyContent="space-between">
					<VStack space="2">
						{/* Nome */}
						<Text textTransform="uppercase" color={color.Branco} fontWeight={'bold'} fontSize="xl">
							{breakLine(nome, 14)}
						</Text>
					</VStack>
					<Box rounded="xs" bg={color.CorMedia} alignSelf="flex-start" mt="3" py="1" px="3">
						{/* Quantidade */}
						<Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color={color.Branco}>
							Testes: {quantidadeDeTestes}
						</Text>
					</Box>
				</Box>
				<Text fontFamily={'poppins'} fontSize={'4xl'} color={color.Branco}>
					{sigla}
				</Text>
			</HStack>
		</Pressable>
	)
}
