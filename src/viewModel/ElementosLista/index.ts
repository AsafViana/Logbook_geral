import firestore from '@react-native-firebase/firestore'
import Elemento from '../../model/Class/Elemento'

export default class ElementosLista {
	setExemplo() {
		const dados: Elemento = {
			nome: 'NaCl',
			nomeCompleto: 'Cloreto de Sódio',
			lote: 1234,
			numeroAtomico: 17,
			validade: new Date('2017-01-01'), //'01/01/2017'
			testes: [
				{
					nome: 'Aspecto',
					expecificacao: ['Pó fino', 'Branco', 'Sem particulas estranhas'],
					tipoResultado: 'check',
					conteudoResultado: 'Ok',
					resultado: '',
					equipamento: [{ nome: 'Balança', numeroSerie: 12345 }],
					data: new Date(Date.now()),
				},
				{
					nome: 'Dosamento',
					expecificacao: ['98% à 102%'],
					tipoResultado: 'input',
					conteudoResultado: null,
					resultado: '',
					equipamento: [
						{ nome: 'HPLC', numeroSerie: 12 },
						{ nome: 'HCL', numeroSerie: 34 },
					],
					data: new Date(Date.now()),
				},
			],
		}

		console.warn(dados)
		//firestore().collection('elementos').doc('testado').collection(dados.nome).add(dados)
	}

	//const user = await firestore().collection('componentes').doc('templateTeste').collection()
}
