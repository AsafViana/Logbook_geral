import { Pressable, Text, Divider } from 'native-base'
import React, { useState, useEffect, useCallback } from 'react'
import { Platform } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { color } from '../../../env.json'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { onValue, ref, database, get } from '../../service/firebaseConfig'
import { Teste, Elemento, Lote } from '../../service/interfaces'

interface Props {
	status: string
	nomeTeste: string
}

const MeuComponente: React.FC<Props> = ({ status, nomeTeste }) => {
	const navigation = useNavigation<NavigationProp<any>>() // Tipo da navegação
	const [StatusTestes, setStatusTestes] = useState<string>()
	const [FontCor, setFontCor] = useState<string>(color.Branco)

	const init = useCallback(() => {
		switch (status){
			case 'Concluido':
				setStatusTestes(color.Confirmar)
				setFontCor(color.Branco)
				break
			case 'Em Andamento':
				setStatusTestes(color.Amarelo)
				setFontCor(color.CorEscura)
				break
			default:
				setStatusTestes(color.Cinza)
				setFontCor(color.CorEscura)
		}
	}, [status])

	useEffect(() => {
		init()
	}, [status])

	const handlePress = () => {
		navigation.navigate('Testes', {  })
	}

	return (
		<Pressable onPress={handlePress} flex={1} bgColor={StatusTestes} my={6} py="4" px="10" rounded="3xl" width={375} maxWidth="100%">
			<Text fontSize={'2xl'} fontFamily={'poppinsSemi'} color={FontCor}>
				{nomeTeste}
			</Text>

		</Pressable>
	)
}

export default MeuComponente
