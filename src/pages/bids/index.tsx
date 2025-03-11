import { BidList } from "./bid-list"

export function Bids() {
  return (
    <div className="py-8 px-16 space-y-8">
      <h1 className="text-2xl">Licitações</h1>

      <BidList />
    </div>
  )
}