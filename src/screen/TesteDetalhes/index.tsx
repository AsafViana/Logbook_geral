import { Center, Text, Box, Divider, FlatList, ScrollView } from 'native-base'
import React, { useState, useEffect, useCallback } from 'react'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { color } from '../../../env.json'
import { useRoute } from '@react-navigation/native'
import { onValue, ref, database } from '../../service/firebaseConfig'
import { Teste } from '../../service/interfaces'
import { CardEquipamento } from '../../component'

export default function index(props) {
	const {} = props
	const route = useRoute()
	const data = route.params.Data
	const elemento = route.params.Elemento

	const [Nome, setNome] = useState('')
	const [Data, setData] = useState('')
	const [Hora, setHora] = useState('')
	const [Equipapentos, setEquipapentos] = useState([])
	const [Especificacoes, setEspecificacoes] = useState([])
	const [Resultado, setResultado] = useState()
	const [TipoDeResultado, setTipoDeResultado] = useState()
	const [Teste, setTeste] = useState('Carregando...')

	const pegaDados = useCallback(() => {
		onValue(ref(database, `elementos/${elemento}/testes`), (snapshot) => {
			const listaDeTestes: Array<Teste> = snapshot.val()

			listaDeTestes.forEach((value) => {
				if (value.data === data) {
					setNome(value.nome)
					const dataArray = value.data.split(' ')
					setData(dataArray[0])
					setHora(dataArray[1])
					setEspecificacoes(value.especificacoes)
					setTipoDeResultado(value.tipoDeResultado)
					setResultado(value.resultado)
					setEquipapentos(value.equipamento)
				}
			})
		})
	}, [elemento, data])

	useEffect(() => {
		pegaDados()
	}, [])

	return (
		<ScrollView flex={1} p={10} backgroundColor={color.CorEscura}>
			<Text pb={5} fontSize={'5xl'} color={color.Branco} fontFamily={'poppinsEBold'}>
				{Nome}
			</Text>
			<Text fontSize={'xl'} fontFamily={'poppins'} color={color.Branco}>
				{'Data: '}
				<Text fontFamily={'poppinsSemi'}>{Data}</Text>
			</Text>
			<Text fontSize={'xl'} fontFamily={'poppins'} color={color.Branco}>
				{'Hora: '}
				<Text fontFamily={'poppinsSemi'}>{Hora}</Text>
			</Text>

			<Divider my="2" bgColor={color.CorClara} thickness="3" />
			<Text pt={5} fontSize={'2xl'} color={color.Branco} fontFamily={'poppinsEBold'}>
				Equipamentos:
			</Text>
			<FlatList data={Equipapentos} renderItem={(item) => <CardEquipamento numeroDeSerie={item.item.numeroDeSerie} nome={item.item.nome} />} keyExtractor={(item) => item.numeroDeSerie} />

			<Divider my="2" bgColor={color.CorClara} thickness="3" />
			<Text mb={3} mt={5} fontSize={'2xl'} color={color.Branco} fontFamily={'poppinsEBold'}>
				Especificações:
			</Text>
			<FlatList
				data={Especificacoes}
				renderItem={(item) => (
					<Text mb={3} color={color.Branco} fontSize={'xl'} fontFamily={'poppins'}>
						{item.item}
					</Text>
				)}
				keyExtractor={(item) => item.numeroDeSerie}
			/>

			<Divider my="2" bgColor={color.CorClara} thickness="3" />
			<Text mb={3} mt={5} fontSize={'2xl'} color={color.Branco} fontFamily={'poppinsEBold'}>
				Resultado:
			</Text>
			<Text fontSize={'xl'} color={color.Branco} fontFamily={'poppins'}>
				{Resultado}
			</Text>
		</ScrollView>
	)
}
