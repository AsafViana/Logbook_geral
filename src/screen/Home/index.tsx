import { Center, Text } from 'native-base'
import React, {useState, useEffect} from 'react'
import {Platform} from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import {color} from '../../../env.json'
import Card from '../../component/Card'

export default function index(props) {
	const {} = props
	return (
		<Center flex={1}>
			<Card nome='cloreto de sodio' quantidadeDeTestes={10} sigla={'NaCl'}/>
		</Center>
	)
}
