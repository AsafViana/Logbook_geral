interface Elemento{
	sigla: string,
	nome: string,
	numeroAtomico: number,
	testes: Array<Teste>
}

interface Teste {
	nome: string,
	data: string,
	equipamento: Array<Equipamento>,
	especificacoes: Array<string>,
	resultado: any,
	tipoDeResultado: any,
	lote: number,
	validade: string
}

interface Equipamento{
	nome: string,
	numeroDeSerie: number
}

interface ResumoElementos {
	nome: string,
	sigla: string,
	testes: number
}

export{
	Teste, Elemento, Equipamento, ResumoElementos
}
