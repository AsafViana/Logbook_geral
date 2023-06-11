import { Center, Text, Box, FlatList, Divider, Icon, IconButton, Pressable, Button } from 'native-base'
import React, { useState, useEffect, useCallback } from 'react'
import { Entypo } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { color } from '../../../env.json'
import { onValue, ref, database, get } from '../../service/firebaseConfig'
import { Teste, Elemento, Lote } from '../../service/interfaces'
import { BotaoLote } from '../../component'

export default function index(props) {
	const {} = props
	const route = useRoute()
	const navigation = useNavigation()
	const elemento = route.params.elemento //'NaCl'
	const NL = route.params.nl
	const Index = route.params.index

	const [Nome, setNome] = useState('')
	const [Lote, setLote] = useState<Lote>()
	const [Testes, setTestes] = useState<Array<Teste>>()
	const [Carregado, setCarregado] = useState(false)

	const pegaDados = useCallback(() => {
		onValue(ref(database, `elementos/${elemento}/lotes/${Index}/`), (snapshot) => {
			const data: Lote = { ...snapshot.val() }
			setLote(data)
		})
		onValue(ref(database, `elementos/${elemento}/lotes/${Index}/testes`), (snapshot) => {
			const data = { ...snapshot.val() }
			setTestes(Object.values(data))
			setCarregado(true)
			console.log(Object.values(data))
		})
	}, [elemento])

	useEffect(() => {
		pegaDados()
	}, [])

	if (Carregado) {
		return (
			<Box flex={1} p={10} backgroundColor={color.CorEscura}>
				<Text pb={5} fontSize={'4xl'} color={color.Branco} fontFamily={'poppinsEBold'}>
					{'NL: '}
					<Text fontSize={'4xl'} fontFamily={'poppins'}>
						{Lote.numeroDeLote}
					</Text>
				</Text>
				<Text fontSize={'2xl'} color={color.Branco} fontFamily={'poppinsEBold'}>
				{'Validade: '}
				<Text fontSize={'2xl'} fontFamily={'poppins'}>
					{Lote.dataDeValidade}
				</Text>
			</Text>
			<Text fontSize={'2xl'} color={color.Branco} fontFamily={'poppinsEBold'}>
				{'NA: '}
				<Text fontSize={'2xl'} fontFamily={'poppins'}>
					{Lote.numeroDeAnalise}
				</Text>
			</Text>
			<Text fontSize={'2xl'} color={color.Branco} fontFamily={'poppinsEBold'}>
				{'NP: '}
				<Text fontSize={'2xl'} fontFamily={'poppins'}>
					{Lote.ordemDeProducao}
				</Text>
			</Text>
				<Divider my="2" bgColor={color.CorClara} thickness="3" />

				<FlatList data={Testes} renderItem={(item) => <BotaoLote status={item.item.status} nomeTeste={item.item.nome} />} keyExtractor={(item) => item.data} />
			</Box>
		)
	}
	else{
		return(
			<Center flex={1} p={10} backgroundColor={color.CorEscura}>
				<Text fontSize={'4xl'} color={color.Cinza} fontFamily={'poppinsEBold'}>
					Carregando...
				</Text>
			</Center>
		)
	}
}
