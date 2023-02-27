import db from '@react-native-firebase/firestore'
import realtime from '@react-native-firebase/database'
import Teste from '../../model/Class/Teste'
import {data, formataData} from '../../model/Data'

const teste : Array<Teste> = [
    {
        nome: 'Aspecto',
        expecificacao: ['Pó fin', 'Branco', 'Sem particulas estranhas'],
        tipoResultado: 'check',
        conteudoResultado: 'Ok',
        resultado: '',
        equipamento: [{ nome: 'Balança', numeroSerie: 12345 }],
        data: data(),
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
        data: data()
    },
]

export function adicionarTestes(){
    teste.map(obj => realtime().ref('/testes/'+obj.nome).set(obj))
    
    
}
