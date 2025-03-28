import { getBids, type GetBidsResponse } from "@/http/bids/get-bids"
import { useQueries } from "@tanstack/react-query"
import { LoaderCircle } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CITIES } from "./constants"
import { Bid } from "./bid"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export function BidList() {
  const [cities, setCities] = useState<string[]>([])
  const [description, setDescription] = useState<string>("")
  const [situation, setSituation] = useState<string>("em andamento")

  const response = useQueries({
    queries: CITIES.map(({ city, query }) => ({
      queryKey: ["bids", city],
      queryFn: () => getBids({ city, query }),
      staleTime: 1000 * 60 * 5 // Tempo em que o cache é guardado,
    })),
  })

  const bids: (GetBidsResponse & { CIDADE: string })[] = response.flatMap((res, i) =>
    res.data?.map((bid) => ({
      ...bid,
      CIDADE: CITIES[i].label,
    })) ?? []
  )

  const filteredBids = bids.filter((bid) => {
    const matchCity = cities.length > 0 ? cities.includes(bid.CIDADE) : true
    const matchSituation = situation ? bid.SITUACAO?.trim().toLowerCase() === situation.trim().toLowerCase() : true
    const matchDescription =
      description.trim() === "" ||
      bid.DISCR?.toLowerCase().includes(description.toLowerCase()) ||
      bid.DISCR?.toLowerCase().includes(description.toLowerCase())

    return matchCity && matchSituation && matchDescription
  })

  const title = (() => {
    const countBids = filteredBids.length

    const concatCities = (cities: string[]) => {
      if (cities.length === 1) return cities[0]
      return `${cities.slice(0, -1).join(', ')} e ${cities[cities.length - 1]}`
    }

    const cityText = cities && cities.length > 0 ? ` em ${concatCities(cities)}` : ""
    const situationText = situation ? ` ${situation}` : ""

    return `Encontradas ${countBids} ${countBids === 1 ? "licitação" : "licitações"}${situationText}${cityText}`
  })()

  return (
    <div>
      {filteredBids.length === 0 ? (
        <div className="w-full flex justify-center py-8">
          <LoaderCircle className="animate-spin size-6 text-muted-foreground" />
        </div>
      ) : (
        <div className="space-y-8">
          <form className="grid grid-cols-12 gap-2 items-end">
            <div className="col-span-3 space-y-0.5">
              <Label className="text-base font-normal">Cidades</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start font-normal"
                  >
                    {cities.length > 0
                      ? `Cidades selecionadas (${cities.length})`
                      : "Selecione uma ou mais cidades"}
                  </Button>
                </PopoverTrigger>

                <PopoverContent className="min-w-[--radix-popover-trigger-width] max-h-[400px] overflow-y-auto">
                  <div className="space-y-3">
                    {CITIES.map(({ city: value, label }) => (
                      <div
                        key={value}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={value}
                          checked={cities.includes(label)}
                          onCheckedChange={(checked) => {
                            setCities((prev) =>
                              checked
                                ? [...prev, label]
                                : prev.filter((c) => c !== label)
                            )
                          }}
                        />

                        <Label htmlFor={value} className="text-sm font-normal cursor-pointer">
                          {label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="col-span-6 space-y-0.5">
              <Label className="text-base font-normal">Descrição</Label>
              <Input
                placeholder="Digite uma descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="col-span-3 space-y-0.5">
              <Label className="text-base font-normal">Situação</Label>
              <Select defaultValue="em andamento" onValueChange={(value) => setSituation(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="em andamento">Em andamento</SelectItem>
                  <SelectItem value="homologada">Homologada</SelectItem>
                  <SelectItem value="revogada">Revogada</SelectItem>
                  <SelectItem value="classificada">Classificada</SelectItem>
                  <SelectItem value="encerrada">Encerrada</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>

          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">
              {title}
            </h1>

            <div className="space-y-8">
              {filteredBids?.map((bid) => (
                <Bid key={bid.NLICITACAO} bid={bid} />
              ))}
            </div>
          </div>

        </div >
      )}
    </div >
  )
}