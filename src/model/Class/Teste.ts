import EquipamentoTeste from "./EquipamentoTeste"

export default interface Teste {
    readonly nome: string,
    readonly expecificacao: Array<any>,
    resultado: string,
    readonly tipoResultado: string,
    readonly conteudoResultado: string,
    readonly equipamento: Array<EquipamentoTeste>
    readonly data: Object
}