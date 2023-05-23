import { Center, Text, Box, FlatList, Divider } from 'native-base'
import React, { useState, useEffect, useCallback } from 'react'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'
import { color } from '../../../env.json'
import { onValue, ref, database, get } from '../../service/firebaseConfig'
import { Teste, Elemento } from '../../service/interfaces'
import {BotaoTestes} from '../../component'

export default function index(props) {
	const {} = props
	const route = useRoute()
	const elemento = route.params.elemento //'NaCl'

	const [Nome, setNome] = useState('')
	const [NumeroAtomico, setNumeroAtomico] = useState<number>()
	const [Testes, setTestes] = useState<Array<Teste>>()

	const pegaDados = useCallback(() => {
		onValue(ref(database, 'elementos/' + elemento), (snapshot) => {
			const data: Elemento = { ...snapshot.val() }
			setNome(data.nome)
			setNumeroAtomico(data.numeroAtomico)
			setTestes(data.testes)
		})
	}, [elemento])

	useEffect(() => {
		pegaDados()
	}, [])

		return (
			<Box flex={1} p={10} backgroundColor={color.CorEscura}>
				<Text fontSize={'5xl'} color={color.Branco} pb={5} fontFamily={'poppinsEBold'}>
					{elemento}
				</Text>
				<Text fontSize={'2xl'} color={color.Branco} fontFamily={'poppins'}>
					{Nome}
				</Text>
				<Divider my="2" bgColor={color.CorClara} thickness="3" />
				<Text pb={5} fontSize={'2xl'} color={color.Branco}>
					{'NA: '}
					<Text fontFamily={'poppinsEBold'}>{NumeroAtomico}</Text>
				</Text>

				<FlatList data={Testes} renderItem={(item) => <BotaoTestes elemento={elemento} data={item.item.data} nome={item.item.nome} />} keyExtractor={(item) => item.data} />
			</Box>
		)
}
