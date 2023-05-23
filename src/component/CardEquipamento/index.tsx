import { Center, Text, Box, VStack, Image, HStack, Pressable, Button } from 'native-base'
import React, { useState, useEffect } from 'react'
import { color } from '../../../env.json'
import { useNavigation } from '@react-navigation/native'

export default function index({ nome, numeroDeSerie}) {
	const navigation = useNavigation()

	const handlePress = () => {
		//navigation.navigate('ElementoVisualizacao', { elemento: sigla })
	}

	const breakLineString = (text: string, character) => {
		const regex = new RegExp(`(.{1,${character}})(?:\\s|$)`, 'g')
		const lines = text.match(regex) || []

		return lines.join('\n')
	}

	const breakLineNumber = (numero: number, character) => {
		const regex = new RegExp(`(.{1,${character}})(?:\\s|$)`, 'g')
		const text = String(numero)
		const lines = text.match(regex) || []

		return lines.join('\n')
	}

	return (
		<Pressable onPress={handlePress} bgColor={color.CorClara} my={6} py="4" px="10" rounded="3xl" width={375} maxWidth="100%">
			<HStack justifyContent="space-between" alignItems={'center'}>
				<Box justifyContent="space-between">
					<VStack space="2">
						{/* Nome */}
						<Text textTransform="uppercase" color={color.Branco} fontWeight={'bold'} fontSize="xl">
							{nome && breakLineString(nome, 14)}
						</Text>
					</VStack>
					<Box rounded="xs" bg={color.CorMedia} alignSelf="flex-start" mt="3" py="1" px="3">
						{/* Quantidade */}
						<Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color={color.Branco}>
							Série: {numeroDeSerie}
						</Text>
					</Box>
				</Box>
			</HStack>
		</Pressable>
	)
}
