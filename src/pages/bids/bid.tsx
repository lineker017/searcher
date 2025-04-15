import type { GetBidsResponse } from "@/http/bids/get-bids"
import { formatCurrency } from "@/utils/format-currency"
import { BidInfo } from "./bid-info"

interface BidProps {
  bid: GetBidsResponse & {
    CIDADE: string
    DOMAIN: string
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

  const DATAE = bid.DATAE.replace("00:00:00", "")
  const DTENC = bid.DTENC.replace("00:00:00", "")
  const DTPROPOSTAINI = bid.DTPROPOSTAINI.replace("00:00:00", "")
  const DTPROPOSTAFIM = bid.DTPROPOSTAFIM.replace("00:00:00", "")

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-2">
        <h1 className="text-lg cursor-pointer hover:underline">
          <a
            href={`${bid.DOMAIN}/comprasedital`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer"
          >
            {bid.LICIT} {bid.NUMERO}/{bid.ANO}
          </a>
        </h1>

        <BidInfo bid={bid} />
      </div>

      <div className="space-y-0.5 text-sm">
        <p>
          Cidade: <span className="text-muted-foreground">{bid.CIDADE}</span>
        </p>
        <p>
          Empresa: <span className="text-muted-foreground">{bid.NOMEEMPRESA}</span>
        </p>

        <p>
          Data de abertura: {DATAE && <span className="text-muted bg-green-200 px-1.5 ml-0.5 rounded-sm">{DATAE}</span>}
        </p>

        <p>
          Data de encerramento: {DTENC && <span className="text-muted bg-red-200 px-1.5 ml-0.5 rounded-sm">{DTENC}</span>}
        </p>

        <p>
          Data inicial da proposta: {DTPROPOSTAINI && <span className="text-muted bg-green-200 px-1.5 ml-0.5 rounded-sm">{DTPROPOSTAINI}</span>}
        </p>

        <p>
          Data final da proposta: {DTPROPOSTAFIM && <span className="text-muted bg-red-200 px-1.5 ml-0.5 rounded-sm">{DTPROPOSTAFIM}</span>}
        </p>

        <p>
          Valor: <span className="text-muted-foreground">{formatCurrency(bid.VALOR)}</span>
        </p>

        <p>
          Descrição: <span className="text-muted-foreground">{bid.DISCR}</span>
        </p>

        <p>
          Situação: <span className={`px-2 py-1 ml-0.5 rounded-md text-xs font-medium ${situationStyle[bid.SITUACAO.trim().toLocaleLowerCase()] || ""}`}>{bid.SITUACAO}</span>
        </p>
      </div>
    </div>
  )

}