import { Center, Text, Box } from 'native-base'
import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import {color} from '../../../env.json'

export default function index(props) {
	const {} = props
	return (
		<Box flex={1} p={10} backgroundColor={color.CorEscura}>
			<Text fontSize={'5xl'} color={color.Branco} pb={5} fontFamily={'poppinsEBold'}>
				index
			</Text>
		</Box>
	)
}
