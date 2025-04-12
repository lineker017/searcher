import { getBids, type GetBidsResponse } from "@/http/bids/get-bids"
import { useQueries } from "@tanstack/react-query"
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
import { Fragment, useEffect, useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Pagination } from "@/components/pagination"
import { useSearchParams } from "react-router-dom"

export function BidList() {
  const [searchParams, _] = useSearchParams()

  const page = Number(searchParams.get('page') || 1)
  const perPage = Number(searchParams.get('per_page') || 10)

  const [cities, setCities] = useState<string[]>([])
  const [description, setDescription] = useState<string>("")
  const [situation, setSituation] = useState<string>("em andamento")

  const [queryStates, setQueryStates] = useState<{ label: string, loading: boolean, error: Error | null }[]>([])

  const selectCities = useMemo(() => {
    return cities
      .map(label => CITIES.find(c => c.label === label))
      .filter((c): c is { city: string; label: string; query: string, domain: string } => Boolean(c))
  }, [cities])

  const response = useQueries({
    queries: selectCities.map(({ city, query }) => ({
      queryKey: ['bids', city],
      queryFn: () => getBids({ city, query }),
      staleTime: 1000 * 60 * 5,
      retry: 5
    }))
  })

  useEffect(() => {
    const states = response.map((res, i) => {
      const label = selectCities[i]?.label

      let loading = false
      let error: Error | null = null

      if (res.isLoading) loading = true
      else if (res.isError) error = res.error as Error

      return label ? { label, loading, error } : null
    }).filter((e): e is { label: string, loading: boolean, error: Error | null } => e !== null)

    const isEqual = JSON.stringify(states) === JSON.stringify(queryStates)

    if (!isEqual) setQueryStates(states)
  }, [response, selectCities])

  const bids: (GetBidsResponse & { CIDADE: string, DOMAIN: string })[] = response.flatMap((res, i) =>
    res.data?.map((bid) => ({
      ...bid,
      CIDADE: CITIES[i].label,
      DOMAIN: CITIES[i].domain
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

  const errorCities = new Set(queryStates.filter(state => state.error).map(state => state.label))
  const loadingCities = new Set(queryStates.filter(state => state.loading).map(state => state.label))

  const concatenatedCities = (() => {
    const concatCities = (citiesToConcat: string[]) => {
      return citiesToConcat.map((city, index) => {
        const prefix = index > 0 ? (index === citiesToConcat.length - 1 ? ' e ' : ', ') : ''

        let className = 'text-xs '
        const cityState = queryStates.find(state => state.label === city)
        const hasError = errorCities.has(city)
        const isLoading = loadingCities.has(city)
        const errorMessage = cityState?.error?.message

        if (isLoading) className += 'animate-pulse duration-1000 text-muted-foreground'
        else if (hasError) className += 'text-red-500 hover:underline cursor-pointer'
        else className += 'text-muted-foreground'

        const spanProps = {
          key: city,
          className: className,
          ...(hasError && errorMessage ? { title: errorMessage } : {})
        };

        const span = <span {...spanProps}>{city}</span>

        return <Fragment key={city}>{prefix}{span}</Fragment>
      });
    };

    return cities && cities.length > 0 ? concatCities(cities) : "";
  })();

  const countBids = filteredBids.length

  const start = (page - 1) * perPage
  const end = start + perPage
  const pages = Math.ceil(filteredBids.length / perPage)
  const paginatedBids = filteredBids.slice(start, end)

  return (
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
                <div className="flex items-center space-x-2 border-b pb-3">
                  <Checkbox
                    id="all"
                    checked={CITIES.length === cities.length}
                    onCheckedChange={(checked) => {
                      if (checked) setCities(CITIES.map(c => c.label))
                      else setCities([])
                    }}
                  />

                  <Label htmlFor='all' className="text-sm font-normal cursor-pointer">
                    Selecionar todas
                  </Label>
                </div>

                {CITIES.map(({ city: value, label }) => (
                  <div
                    key={value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={value}
                      checked={cities.includes(label)}
                      onCheckedChange={(checked) => {
                        setCities(prev =>
                          checked
                            ? [...prev, label]
                            : prev.filter(c => c !== label)
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
      {paginatedBids.length === 0 ? (
        <div className="w-full flex justify-center py-8">
          <p className="text-muted-foreground text-sm">Nenhuma licitação encontrada.</p>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="border p-6 rounded-md space-y-1">
            <h1 className="text-2xl font-semibold">
              Encontradas {countBids} {countBids === 1 ? "licitação" : "licitações"} {situation}
            </h1>
            <p className="text-muted-foreground text-xs">{concatenatedCities}</p>
          </div>

          <div className="border p-6 rounded-md space-y-4">
            <Pagination
              page={page}
              pages={pages}
              items={filteredBids.length}
              showing={paginatedBids.length}
            />

            <div className="space-y-8">
              {paginatedBids?.map((bid) => (
                <Bid key={bid.NLICITACAO} bid={bid} />
              ))}
            </div>

            <Pagination
              page={page}
              pages={pages}
              items={filteredBids.length}
              showing={paginatedBids.length}
            />
          </div>
        </div>
      )}
    </div >
  )
}