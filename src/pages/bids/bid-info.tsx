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
  bid: GetBidsResponse & {
    CIDADE: string
    DOMAIN: string
  }
}

export function BidInfo({ bid }: BidInfoProps) {
  const bidEntries = Object.entries(bid)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Eye className="size-4 cursor-pointer" />
      </DialogTrigger>

      <DialogContent className="max-w-full max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            <a
              href={`${bid.DOMAIN}/comprasedital`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              {bid.LICIT} {bid.NUMERO}/{bid.ANO}
            </a>
          </DialogTitle>
          <DialogDescription>
            {bid.SITUACAO}
          </DialogDescription>
        </DialogHeader>

        <div className="max-h-full space-y-0.5">
          {bidEntries.map(([key, value]) => {
            let formatedValue = value

            if (key === 'VALOR') formatedValue = formatCurrency(value)

            return (
              <p key={key}>{key}: <span className="text-muted-foreground text-sm">{formatedValue}</span></p>
            )
          })}
        </div>
      </DialogContent>
    </Dialog >
  )
}
