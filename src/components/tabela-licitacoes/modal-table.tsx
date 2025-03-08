import { obterLicitacoes, type BuscarLicitacoesResponse } from "@/http/licitacoes-contratos/obter-licitacoes"
import { useEffect, useState } from "react"

export function ModalTbale() {
  const [licitacoes, setLicitacoes] = useState<BuscarLicitacoesResponse[]>([])

  useEffect(() => {
        async function fetch() {
          const data = await obterLicitacoes()
    
          if (data.length) {
            setLicitacoes(data)
          }
        }
    
        fetch()
      }, [])
  
  return (
    <div>
      {
        licitacoes.find(item => item.PROCLICITACAO)
      }
    </div>
  )
}