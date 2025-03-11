import { useFiltersStore } from "@/stores/use-filters-store"
import ky from "ky"

export interface Filters {
	year?: string
	company?: string
}

export interface GetBidsRequest {
	filters: Filters
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

export async function getBids() {
	const { filters } = useFiltersStore.getState();

	const params = new URLSearchParams({
		Listagem: "Licitacoes",
		MostraDadosConsolidado: "False",
	})

	if (filters.company) params.append("Empresa", filters.company)
	if (filters.year) params.append("Exercicio", filters.year) // API deles não funciona o filtro de ano

	const api = ky.create({
		prefixUrl: `/${filters.city}/Transparencia/VersaoJson`,
		credentials: 'include',
	});

	const response =
		await api.get(`LicitacoesEContratos/?${params.toString()}`)
			.json<GetBidsResponse[]>()

	return response
}