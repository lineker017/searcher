import { api } from "../api-client"

export interface BuscarLicitacoesResponse {
	ANO: string,
	PROCLICITACAO: string,
	NUMERO: string,
	NLICITACAO: string,
	NUMLIC: string,
	PROCLIC: string,
	LICIT: string,
	DATAE: string,
	DTENC: string,
	REGISTROPRECO: string,
	DISCR10: string,
	LICITACAO: string,
	DISCR: string,
	SITUACAO: string,
	COMP: string,
	VALOR: string,
	ARQUIVO: string,
	EMPRESA: string,
	CARONA: string,
	ESPECIETCE: string,
	ESPECIETCE_NRO: string,
	DTENV: string,
	HORENV: string,
	CHAMADAPUB: string,
	CODTCE: string,
	ORCAMENTO_SIGILOSO: string,
	VALOR1: string,
	EDITAL: string,
	PARTICIPANTES: string,
	CPFCNPJ: string,
	NOMEEMPRESA: string,
	ARTIGO_INCISO: string,
	DTPROPOSTAINI: string,
	DTPROPOSTAFIM: string
}

export async function obterLicitacoes() {
  const response = 
    api.get('LicitacoesEContratos/?Listagem=Licitacoes&Exercicio=2025&Empresa=3&MostraDadosConsolidado=False')
      .json<BuscarLicitacoesResponse[]>()

  return response
}