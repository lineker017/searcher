import ky from "ky"

export interface GetBidsRequest {
	city: string
	query: string
}

export interface GetBidsResponse {
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

export async function getBids({ city, query }: GetBidsRequest) {
	const api = ky.create({
		prefixUrl: `/${city}/Transparencia/VersaoJson`,
		credentials: 'include',
	});

	const response = await api
		.get(query)
		.json<GetBidsResponse[]>()

	return response
}