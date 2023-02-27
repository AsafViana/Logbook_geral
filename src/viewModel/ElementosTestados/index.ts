import firestore from '@react-native-firebase/firestore'
import React, { useEffect } from 'react';
import realtime from '@react-native-firebase/database'
import {adicionarTestes} from '../EnviaDados'
import {data, formataData} from '../../model/Data'
import Elemento from '../../model/Class/Elemento'

export default class ElementosTestados {
    async listaElementos(){
        const dado = await firestore().collection('elementos').doc('testado').get()
        .then(dado => {console.log('ei')})
        .catch(dado => {console.log('opa')})
        console.warn(dado)
    }

    async teste(){
        realtime().ref('/')
  .once('value').then(snapshot => {
			console.log(Object.values(snapshot.val().elementos.templateTeste.NaCl));
		  });
		
    }

    adicionarExemplo(){
        const dados = {
			nome: 'NaCl',
			nomeCompleto: 'Cloreto de Sódio',
			lote: null,
			numeroAtomico: 17,
			validade: null, 
            registro: null,
			testes: [
				{
					nome: 'Aspecto',
					expecificacao: ['Pó fin', 'Branco', 'Sem particulas estranhas'],
					tipoResultado: 'check',
					conteudoResultado: 'Ok',
					resultado: null,
					equipamento: [{ nome: 'Balança', numeroSerie: null }],
					data: null,
				},
				{
					nome: 'Dosamento',
					expecificacao: ['98% à 102%'],
					tipoResultado: 'input',
					conteudoResultado: null,
					resultado: null,
					equipamento: [
						{ nome: 'HPLC', numeroSerie: null },
						{ nome: 'HCL', numeroSerie: null },
					],
					data: null,
				},
			],
		}
        realtime()
        .ref('elementos/templateTeste/'+dados.nome)
        .set(dados)
        .then(() => console.log(dados.registro))
        .catch(erro => console.log(erro))
    }
}