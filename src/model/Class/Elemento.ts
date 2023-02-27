import Teste from './Teste'

export default interface Elemento {
	readonly nome: string
	readonly nomeCompleto: string
	readonly numeroAtomico: number
	lote: number
	validade: Date
	readonly testes: Array<Teste>
}
