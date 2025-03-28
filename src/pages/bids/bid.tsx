import type { GetBidsResponse } from "@/http/bids/get-bids"
import { formatCurrency } from "@/utils/format-currency"

interface BidProps {
  bid: GetBidsResponse
  city?: string
}

export function Bid({ bid, city }: BidProps) {
  const situationStyle: Record<string, string> = {
    'em andamento': "bg-yellow-300 text-yellow-800",
    homologada: "bg-green-300 text-green-800",
    revogada: "bg-red-300 text-red-800",
    classificada: "bg-red-300 text-red-800",
    encerrada: "bg-gray-300 text-gray-800",
  }

  return (
    <div className="space-y-1.5">
      <h1 className="text-xl cursor-pointer hover:underline">{bid.LICIT} {bid.NUMERO}/{bid.ANO}</h1>

      <div className="space-y-0.5">
        <p>Data de abertura: <span className="text-muted-foreground">{bid.DATAE}</span></p>
        <p>Empresa: <span className="text-muted-foreground">{bid.NOMEEMPRESA}</span></p>
        <p>Municipio: <span className="text-muted-foreground">{city}</span></p>
        <p>Valor: <span className="text-muted-foreground">{formatCurrency(bid.VALOR)}</span></p>
        <p>Descrição: <span className="text-muted-foreground">{bid.DISCR}</span></p>
        <p>Situação: <span className={`px-2 py-1 ml-1 rounded-md text-xs font-medium ${situationStyle[bid.SITUACAO.trim().toLocaleLowerCase()] || ""}`}>{bid.SITUACAO}</span></p>
      </div>
    </div>
  )

}