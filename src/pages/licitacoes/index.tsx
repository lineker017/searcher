import { obterLicitacoes } from "@/http/licitacoes-contratos/obter-licitacoes"
import { useEffect } from "react"

export function Licitacoes() {
  useEffect(() => {
    async function fetch() {
      const data = await obterLicitacoes()
      console.log(data);
      
    }

    fetch()
  }, [])

  return (
    <div></div>
  )
}