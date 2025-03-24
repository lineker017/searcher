import { getBids } from "@/http/bids/get-bids"
import { useQuery } from "@tanstack/react-query"
import { LoaderCircle } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CITIES } from "./constants"
import { useFiltersStore } from "@/stores/use-filters-store"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { Bid } from "./bid"

export function BidList() {
  const { filters, setFilters, setCity } = useFiltersStore()
  const [searchParams, _] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const city = searchParams.get("city") || ""
    const year = searchParams.get("year") || ""
    const name = searchParams.get("name") || ""
    const situation = searchParams.get("situation") || ""
    const value = searchParams.get("value") || ""

    setFilters({ year, name, situation, value, city })
  }, [])

  useEffect(() => {
    const params = new URLSearchParams()

    if (filters.city) params.set("city", filters.city)
    if (filters.year) params.set("year", filters.year)
    if (filters.name) params.set("name", filters.name)
    if (filters.situation) params.set("situation", filters.situation)
    if (filters.value) params.set("value", filters.value)

    navigate(`?${params.toString()}`, { replace: true })
  }, [filters])

  const { data, isLoading } = useQuery({
    queryKey: ['bids', filters.company, filters.year],
    queryFn: () => getBids(),
    enabled: !!filters.city
  })

  const city = CITIES.find((city) => city.value === filters.city)?.label
  return (
    <div>
      {isLoading ? (
        <div className="w-full flex justify-center py-8">
          <LoaderCircle className="animate-spin size-6 text-muted-foreground" />
        </div>
      ) : (
        <div className="space-y-4">
          <form className="grid grid-cols-12 gap-2 items-end">
            <div className="col-span-3">
              <Label>Cidade</Label>
              <Select value={filters.city} onValueChange={(value) => setCity(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />

                </SelectTrigger>
                <SelectContent>
                  {CITIES.map((city) => (
                    <SelectItem key={city.value} value={city.value}>{city.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2">
              <Label>Situação</Label>
              <Select
                value={filters.situation}
                onValueChange={(value) => setFilters({ situation: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="emAndamento">Em andamento</SelectItem>
                  <SelectItem value="homologada">Homologada</SelectItem>
                  <SelectItem value="revogada">Revogada</SelectItem>
                  <SelectItem value="classificada">Classificada</SelectItem>
                  <SelectItem value="encerrada">Encerrada</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2">
              <Label>Valor</Label>
              <Input
                placeholder="Filtrar por valor"
                value={filters.value}
                onChange={(e) => setFilters({ value: e.target.value })}
              />
            </div>
          </form>

          {filters.city ? (
            <div className="space-y-8">
              {data?.map((bid) => (
                <Bid key={bid.PROCLICITACAO} bid={bid} city={city} />
              ))}
            </div>
          ) : (
            <div className="border rounded-sm p-4">
              <p className="text-sm text-muted-foreground text-center">Selecione uma <strong>cidade</strong> para buscar as licitações</p>
            </div>
          )}
        </div >
      )}
    </div >
  )
}