import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type { GetBidsResponse } from "@/http/bids/get-bids"
import { formatCurrency } from "@/utils/format-currency"
import { Eye } from "lucide-react"

interface BidInfoProps {
  bid: GetBidsResponse
}

export function BidInfo({ bid }: BidInfoProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Eye className="size-4 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="max-w-full max-h-screen">
        <DialogHeader>
          <DialogTitle>{bid.LICIT} {bid.NUMERO}/{bid.ANO}</DialogTitle>
          <DialogDescription>
            {bid.SITUACAO}
          </DialogDescription>
        </DialogHeader>

        <div className="max-h-full space-y-0.5">
          <p>ANO: <span className="text-muted-foreground text-sm">{bid.ANO}</span></p>
          <p>PROCLICITACAO: <span className="text-muted-foreground text-sm">{bid.PROCLICITACAO}</span></p>
          <p>NUMERO: <span className="text-muted-foreground text-sm">{bid.NUMERO}</span></p>
          <p>NLICITACAO: <span className="text-muted-foreground text-sm">{bid.NLICITACAO}</span></p>
          <p>NUMLIC: <span className="text-muted-foreground text-sm">{bid.NUMLIC}</span></p>
          <p>PROCLIC: <span className="text-muted-foreground text-sm">{bid.PROCLIC}</span></p>
          <p>LICIT: <span className="text-muted-foreground text-sm">{bid.LICIT}</span></p>
          <p>DATAE: <span className="text-muted-foreground text-sm">{bid.DATAE}</span></p>
          <p>DTENC: <span className="text-muted-foreground text-sm">{bid.DTENC}</span></p>
          <p>REGISTROPRECO: <span className="text-muted-foreground text-sm">{bid.REGISTROPRECO}</span></p>
          <p>DISCR10: <span className="text-muted-foreground text-sm">{bid.DISCR10}</span></p>
          <p>LICITACAO: <span className="text-muted-foreground text-sm">{bid.LICITACAO}</span></p>
          <p>DISCR: <span className="text-muted-foreground text-sm">{bid.DISCR}</span></p>
          <p>SITUACAO: <span className="text-muted-foreground text-sm">{bid.SITUACAO}</span></p>
          <p>COMP: <span className="text-muted-foreground text-sm">{bid.COMP}</span></p>
          <p>VALOR: <span className="text-muted-foreground text-sm">{bid.VALOR}</span></p>
          <p>ARQUIVO: <span className="text-muted-foreground text-sm">{bid.ARQUIVO}</span></p>
          <p>EMPRESA: <span className="text-muted-foreground text-sm">{bid.EMPRESA}</span></p>
          <p>CARONA: <span className="text-muted-foreground text-sm">{bid.CARONA}</span></p>
          <p>ESPECIETCE: <span className="text-muted-foreground text-sm">{bid.ESPECIETCE}</span></p>
          <p>ESPECIETCE_NRO: <span className="text-muted-foreground text-sm">{bid.ESPECIETCE_NRO}</span></p>
          <p>DTENV: <span className="text-muted-foreground text-sm">{bid.DTENV}</span></p>
          <p>HORENV: <span className="text-muted-foreground text-sm">{bid.HORENV}</span></p>
          <p>CHAMADAPUB: <span className="text-muted-foreground text-sm">{bid.CHAMADAPUB}</span></p>
          <p>CODTCE: <span className="text-muted-foreground text-sm">{bid.CODTCE}</span></p>
          <p>ORCAMENTO_SIGILOSO: <span className="text-muted-foreground text-sm">{bid.ORCAMENTO_SIGILOSO}</span></p>
          <p>VALOR1: <span className="text-muted-foreground text-sm">{bid.VALOR1}</span></p>
          <p>EDITAL: <span className="text-muted-foreground text-sm">{bid.EDITAL}</span></p>
          <p>PARTICIPANTES: <span className="text-muted-foreground text-sm">{bid.PARTICIPANTES}</span></p>
          <p>CPFCNPJ: <span className="text-muted-foreground text-sm">{bid.CPFCNPJ}</span></p>
          <p>NOMEEMPRESA: <span className="text-muted-foreground text-sm">{bid.NOMEEMPRESA}</span></p>
          <p>ARTIGO_INCISO: <span className="text-muted-foreground text-sm">{bid.ARTIGO_INCISO}</span></p>
          <p>DTPROPOSTAINI: <span className="text-muted-foreground text-sm">{bid.DTPROPOSTAINI}</span></p>
          <p>DTPROPOSTAFIM: <span className="text-muted-foreground text-sm">{bid.DTPROPOSTAFIM}</span></p>
        </div>
      </DialogContent>
    </Dialog >
  )
}