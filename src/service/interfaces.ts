interface Elemento {
	sigla: string
	nome: string
	lotes: Array<Lote>
}

interface Teste {
	nome: string
	data: string
	equipamento: Array<EquipamentoResumo>
	especificacoes: Array<string>
	resultado: any
	analista: string
	status: string
}

interface Equipamento {
	nome: string
	numeroDeSerie: number | null
	estaSendoUsado: boolean
}

interface EquipamentoResumo {
	nome: string
	numeroDeSerie: number | null
}

interface ResumoElementos {
	nome: string
	sigla: string
	testes: number
}

interface Lote {
	numeroDeLote: number
	numeroDeAnalise: number
	dataDeValidade: string
	ordemDeProducao: string
	testes: Array<Teste>
}

const equipamentos: Array<Equipamento> = [
	{
		nome: 'Balança',
		estaSendoUsado: false,
		numeroDeSerie: 38491
	},
	{
		nome: ' Outro Item',
		estaSendoUsado: false,
		numeroDeSerie: 1029
	},
	{
		nome: 'HPLC',
		estaSendoUsado: false,
		numeroDeSerie: 5678
	},
	{
		nome: 'HCL',
		estaSendoUsado: false,
		numeroDeSerie: 1234
	},
]

export { Teste, Elemento, EquipamentoResumo, ResumoElementos, Lote }
