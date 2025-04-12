import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useNavigate, useSearchParams } from "react-router-dom"

interface PaginationProps {
  page: number
  pages: number
  items: number
  showing: number
}

export function Pagination({ pages, items, page, showing }: PaginationProps) {
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()

  function updateParam(param: string, value: string | number) {
    const params = new URLSearchParams(searchParams.toString())

    params.set(param, String(value))

    navigate(`?${params.toString()}`)
  }

  function updatePage(newPage: number) {
    updateParam('page', newPage)
  }

  function updatePerPage(newPerPage: number) {
    updateParam('per_page', newPerPage)
  }

  function firstPage() {
    updatePage(1)
  }

  function previousPage() {
    if (page - 1 > 0) updatePage(page - 1)
  }

  function nextPage() {
    if (page + 1 <= pages) updatePage(page + 1)
  }

  function lastPage() {
    updatePage(pages)
  }

  return (
    <div className="flex items-center justify-between text-sm text-muted-foreground">
      <span className="hover:underline">
        Mostrando <strong className="font-semibold">{showing}</strong> de <strong className="font-semibold">{items}</strong> registros
      </span>

      <div className="flex items-center gap-8">
        <div className="flex items-center flex-grow gap-2">
          <span className="whitespace-nowrap">Registros por página</span>

          <Select defaultValue={searchParams.get('per_page') || '10'} onValueChange={(value) => updatePerPage(Number(value))}>
            <SelectTrigger className="w-16">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <span>Página {page} de {pages}</span>

        <div className="space-x-1.5">
          <Button
            variant='outline'
            size='icon'
            disabled={page - 1 <= 0}
            onClick={firstPage}
          >
            <ChevronsLeft className="size-4" />
            <span className="sr-only">First page</span>
          </Button>

          <Button
            variant='outline'
            size='icon'
            disabled={page - 1 <= 0}
            onClick={previousPage}
          >
            <ChevronLeft className="size-4" />
            <span className="sr-only">Previous page</span>
          </Button>

          <Button
            variant='outline'
            size='icon'
            disabled={page + 1 > pages}
            onClick={nextPage}
          >
            <ChevronRight className="size-4" />
            <span className="sr-only">Next page</span>
          </Button>

          <Button
            variant='outline'
            size='icon'
            disabled={page + 1 > pages}
            onClick={lastPage}
          >
            <ChevronsRight className="size-4" />
            <span className="sr-only">Last page</span>
          </Button>
        </div>
      </div>
    </div>
  )
}