import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Box, Text, Pressable, Input, FormControl, Stack, HStack, Select, CheckIcon, Divider, Alert, Button, Spinner } from 'native-base'
import database from '@react-native-firebase/database'
import Elemento from '../../../model/Class/Elemento'

export default function FormularioElemento(props) {
	const elemento = props.route.params
	const [Dados, setDados] = useState(Object)
	const [Dia, setDia] = useState('Dia')
	const [Mes, setMes] = useState('Mês')
	const [Ano, setAno] = useState('Ano')
	const [ExibirTeste, setExibirTeste] = useState(false)
	const Vm = new Classe()
	Vm.setTestes(elemento)
	.then(() => setExibirTeste(true))
	Vm.setDado(elemento)
	.then(obj => {setDados(obj)
	})
	
	
	let formulario: Elemento = Dados
	
	const dias = []
	const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abriu', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
	const anos = []
	
	for (let i: number = 1; i < 32; ++i) {
		dias.push(i)
	}
	for (let i: number = 0; i < 11; ++i) {
		anos.push(i + 2023)
	}
	
	return (
		<Box mx="5" alignItems="center">
			<Box w="100%">
				<Text>{Dados.nome}</Text>
				<Text>{Dados.nomeCompleto}</Text>
				<Divider my={4} />
				<Text>Numero atomico:</Text>
				<Text>{Dados.numeroAtomico}</Text>
				<Divider my={4} />
				<Text>Validade</Text>
				<HStack space={4}>
					{/*Dia*/}
					<Select
						selectedValue={Dia}
						accessibilityLabel="Dia"
						minW="90"
						placeholder={String(Dia)}
						_selectedItem={{
							bg: 'teal.600',
							endIcon: <CheckIcon size="5" />,
						}}
						mt={1}
						onValueChange={(itemValue) => setDia(itemValue)}>
						{dias.map((dia) => (
							<Select.Item label={dia} value={dia} />
						))}
					</Select>
	
					{/*Mês*/}
					<Select
						selectedValue={Mes}
						accessibilityLabel="Mes"
						minW="100"
						placeholder={Mes}
						_selectedItem={{
							bg: 'teal.600',
							endIcon: <CheckIcon size="5" />,
						}}
						mt={1}
						onValueChange={(itemValue) => setMes(itemValue)}>
						{mes.map((mes) => (
							<Select.Item label={mes} value={mes} />
						))}
					</Select>
	
					{/*Ano*/}
					<Select
						selectedValue={Ano}
						accessibilityLabel="Ano"
						placeholder={String(Ano)}
						minW="90"
						_selectedItem={{
							bg: 'teal.600',
							endIcon: <CheckIcon size="5" />,
						}}
						mt={1}
						onValueChange={(itemValue) => setAno(itemValue)}>
						{anos.map((ano) => (
							<Select.Item label={ano} value={ano} />
						))}
					</Select>
				</HStack>
				<Divider my={4} />
				<FormControl>
					<Stack>
						<FormControl.Label></FormControl.Label>
						<Input
							type="text"
							onChangeText={(text) => {
								formulario.lote = Number(text)
							}}
							keyboardType="number-pad"
							placeholder="Numero de lote"
						/>
					</Stack>
				</FormControl>
				<Divider my={4} />
				<Text>Testes:</Text>
				{ExibirTeste ? Dados.testes.map(obj => <Button mt={4}>{obj.nome}</Button>) : <Spinner color="warning.500" size='lg'/>}
			</Box>
		</Box>
	)
}

class Classe {
	delay(timeInMillis: number): Promise<void> {
		return new Promise((resolve) => setTimeout(() => resolve(), timeInMillis))
	}

	setDado(obj: string) {
		return new Promise((resolve, reject) => {
			database()
				.ref('/elementos/templateTeste/' + obj)
				.once('value')
				.then((snapshot) => {resolve(snapshot.val())})
		})
	}

	setTestes(obj: string) {
		return new Promise((resolve, reject) => {
			database()
				.ref(`/testes`)
				.once('value')
				.then((snapshot) => resolve(snapshot.val()))
		})
	}

}
