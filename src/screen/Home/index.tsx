import { Center, Text, FlatList, IconButton, Icon } from 'native-base'
import React, { useState, useEffect, useCallback } from 'react'
import { Platform } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { color } from '../../../env.json'
import Card from '../../component/Card'
import { onValue, ref, database, get } from '../../service/firebaseConfig'
import { ResumoElementos, Elemento } from '../../service/interfaces'
import { useNavigation } from '@react-navigation/native'

export default function index(props) {
	const {} = props
	const navigation = useNavigation()
	const [ElementosResumo, setElementosResumo] = useState<Array<ResumoElementos>>()

	const pegaDados = useCallback(() => {
		onValue(ref(database, 'elementos/'), (snapshot) => {
			const data: Array<Elemento> = { ...snapshot.val() }
			const listaElementosResumo: Array<ResumoElementos> = []

			Object.entries(data).map(([chave, valor]) => {
				const info: ResumoElementos = {
					nome: valor.nome,
					sigla: valor.sigla,
					testes: valor.lotes.length,
				}
				listaElementosResumo.push(info)
			})
			setElementosResumo(listaElementosResumo)
		})
	},[database])

	useEffect(() => {
		pegaDados()
	}, [])

	return (
		<Center flex={1} p={5} backgroundColor={color.CorEscura}>
			<FlatList data={ElementosResumo} renderItem={(item) => <Card nome={item.item.nome} quantidadeDeTestes={item.item.testes} sigla={item.item.sigla} />} keyExtractor={(item) => item.sigla} />

			<IconButton
				onPress={() => navigation.navigate('NovoLote')}
				icon={<Icon as={Entypo} name="circle-with-plus" />}
				_icon={{
					color: color.CorMuitoClara,
					size: '6xl',
				}}
			/>
		</Center>
	)
}
