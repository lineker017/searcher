import { obterLicitacoes, type BuscarLicitacoesResponse } from "@/http/licitacoes-contratos/obter-licitacoes"
import { useEffect, useState } from "react"

export function Licitacoes() {
  const [licitacoes, setLicitacoes] = useState<BuscarLicitacoesResponse[]>([])

  useEffect(() => {
    async function fetch() {
      const data = await obterLicitacoes()
      console.log(data);

      if (data.length) {
        setLicitacoes(data)
      }
    }

    fetch()
  }, [])

  return (
    <div>
      <h1 className="text-center">
        Licitações
      </h1>

      <div>
        {licitacoes.map(item => (
          <h1 key={item.LICIT}>{item.LICIT}</h1>
        ))}
      </div>
    </div>
  )
}