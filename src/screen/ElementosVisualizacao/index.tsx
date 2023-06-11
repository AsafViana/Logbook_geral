import { Center, Text, Box, FlatList, Divider, Icon, IconButton, Pressable, Button } from 'native-base'
import React, { useState, useEffect, useCallback } from 'react'
import { Entypo } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { color } from '../../../env.json'
import { onValue, ref, database, get } from '../../service/firebaseConfig'
import { Teste, Elemento, Lote } from '../../service/interfaces'
import { BotaoTestes } from '../../component'

export default function index(props) {
	const {} = props
	const route = useRoute()
	const navigation = useNavigation()
	const elemento = route.params.elemento //'NaCl'

	const [Nome, setNome] = useState('')
	const [Lotes, setLotes] = useState<Array<Lote>>()

	const pegaDados = useCallback(() => {
		onValue(ref(database, 'elementos/' + elemento), (snapshot) => {
			const data: Elemento = { ...snapshot.val() }
			setNome(data.nome)
			setLotes(data.lotes)
		})
	}, [elemento])

	useEffect(() => {
		pegaDados()
		console.log('ElementoVisualizacao')
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

			<FlatList data={Lotes} renderItem={(item) => <BotaoTestes index={item.index} nl={item.item.numeroDeLote} elemento={elemento} data={item.item.dataDeValidade} nome={item.item.numeroDeAnalise} />} keyExtractor={(item) => item.dataDeValidade} />

			<IconButton
			onPress={() => navigation.navigate('NovoTeste')}
				icon={<Icon as={Entypo} name="circle-with-plus" />}
				_icon={{
					color: color.CorMuitoClara,
					size: '6xl',
				}}
			/>
		</Box>
	)
}
