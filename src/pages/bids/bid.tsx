import type { GetBidsResponse } from "@/http/bids/get-bids"
import { formatCurrency } from "@/utils/format-currency"
import { BidInfo } from "./bid-info"

interface BidProps {
  bid: GetBidsResponse & {
    CIDADE: string
  }
}

export function Bid({ bid }: BidProps) {

  const situationStyle: Record<string, string> = {
    'em andamento': "bg-yellow-300 text-yellow-800",
    homologada: "bg-green-300 text-green-800",
    revogada: "bg-red-300 text-red-800",
    classificada: "bg-red-300 text-red-800",
    encerrada: "bg-gray-300 text-gray-800",
  }

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-2">
        <h1 className="text-lg cursor-pointer hover:underline">
          <a
            href="http://45.172.145.250:8079/comprasedital"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer"
          >
            {bid.LICIT} {bid.NUMERO}/{bid.ANO}
          </a>
        </h1>

        <BidInfo bid={bid} />
      </div>

      <div className="space-y-0.5">
        <p>Data de abertura: <span className="text-muted-foreground text-sm">{bid.DATAE}</span></p>
        <p>Cidade: <span className="text-muted-foreground text-sm">{bid.CIDADE}</span></p>
        <p>Empresa: <span className="text-muted-foreground text-sm">{bid.NOMEEMPRESA}</span></p>
        <p>Valor: <span className="text-muted-foreground text-sm">{formatCurrency(bid.VALOR)}</span></p>
        <p>Descrição: <span className="text-muted-foreground text-sm">{bid.DISCR}</span></p>
        <p>Situação: <span className={`px-2 py-1 ml-1 rounded-md text-xs font-medium ${situationStyle[bid.SITUACAO.trim().toLocaleLowerCase()] || ""}`}>{bid.SITUACAO}</span></p>
      </div>
    </div>
  )

}