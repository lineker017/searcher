import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { obterLicitacoes, type BuscarLicitacoesResponse } from "@/http/licitacoes-contratos/obter-licitacoes";
import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export function TabelaLicitacoes() {
  const [licitacoes, setLicitacoes] = useState<BuscarLicitacoesResponse[]>([]);
  const [selectedItem, setSelectedItem] = useState<BuscarLicitacoesResponse | null>(null); // Estado para o item selecionado

  useEffect(() => {
    async function fetch() {
      const data = await obterLicitacoes();

      if (data.length) {
        setLicitacoes(data);
      }
    }

    fetch();
  }, []);

  function handleModal(item: BuscarLicitacoesResponse) {
    setSelectedItem(selectedItem === item ? null : item);
  }

  return (
    <div className="w-full">
      <div className="relative z-0 w-1/2 py-3 mx-auto">
        {licitacoes.map((item) => (
          <div key={item.PROCLICITACAO} className="flex items-center gap-5">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">NOMEEMPRESA</TableHead>
                  <TableHead className="text-center">LICITACAO</TableHead>
                  <TableHead className="text-center">ANO</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center pb-5">{item.NOMEEMPRESA}</TableCell>
                  <TableCell className="text-center pb-5">{item.LICITACAO}</TableCell>
                  <TableCell className="text-center pb-5">{item.ANO}</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Eye onClick={() => handleModal(item)} className="size-5 cursor-pointer" />

            {selectedItem === item && (
              <div className="absolute z-50 top-0 left-1/2 -translate-x-1/2 bg-background">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center">ANO</TableHead>
                      <TableHead className="text-center">PROCLICITACAO</TableHead>
                      <TableHead className="text-center">NUMERO</TableHead>
                      <TableHead className="text-center">NLICITACAO</TableHead>
                      <TableHead className="text-center">NUMLIC</TableHead>
                      <TableHead className="text-center">PROCLIC</TableHead>
                      <TableHead className="text-center">LICIT</TableHead>
                      <TableHead className="text-center">DATAE</TableHead>
                      <TableHead className="text-center">DTENC</TableHead>
                      <TableHead className="text-center">REGISTROPRECO</TableHead>
                      <TableHead className="text-center">DISCR10</TableHead>
                      <TableHead className="text-center">LICITACAO</TableHead>
                      <TableHead className="text-center">DISCR</TableHead>
                      <TableHead className="text-center">SITUACAO</TableHead>
                      <TableHead className="text-center">COMP</TableHead>
                      <TableHead className="text-center">VALOR</TableHead>
                      <TableHead className="text-center">ARQUIVO</TableHead>
                      <TableHead className="text-center">EMPRESA</TableHead>
                      <TableHead className="text-center">CARONA</TableHead>
                      <TableHead className="text-center">ESPECIETCE</TableHead>
                      <TableHead className="text-center">ESPECIETCE_NRO</TableHead>
                      <TableHead className="text-center">DTENV</TableHead>
                      <TableHead className="text-center">HORENV</TableHead>
                      <TableHead className="text-center">CHAMADAPUB</TableHead>
                      <TableHead className="text-center">CODTCE</TableHead>
                      <TableHead className="text-center">ORCAMENTO_SIGILOSO</TableHead>
                      <TableHead className="text-center">VALOR1</TableHead>
                      <TableHead className="text-center">EDITAL</TableHead>
                      <TableHead className="text-center">PARTICIPANTES</TableHead>
                      <TableHead className="text-center">CPFCNPJ</TableHead>
                      <TableHead className="text-center">NOMEEMPRESA</TableHead>
                      <TableHead className="text-center">ARTIGO_INCISO</TableHead>
                      <TableHead className="text-center">DTPROPOSTAINI</TableHead>
                      <TableHead className="text-center">DTPROPOSTAFIM</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-center">{item.ANO}</TableCell>
                      <TableCell className="text-center">{item.PROCLICITACAO}</TableCell>
                      <TableCell className="text-center">{item.NUMERO}</TableCell>
                      <TableCell className="text-center">{item.NLICITACAO}</TableCell>
                      <TableCell className="text-center">{item.NUMLIC}</TableCell>
                      <TableCell className="text-center">{item.PROCLIC}</TableCell>
                      <TableCell className="text-center">{item.LICIT}</TableCell>
                      <TableCell className="text-center">{item.DATAE}</TableCell>
                      <TableCell className="text-center">{item.DTENC}</TableCell>
                      <TableCell className="text-center">{item.REGISTROPRECO}</TableCell>
                      <TableCell className="text-center">{item.DISCR10}</TableCell>
                      <TableCell className="text-center">{item.LICITACAO}</TableCell>
                      <TableCell className="text-center">{item.DISCR}</TableCell>
                      <TableCell className="text-center">{item.SITUACAO}</TableCell>
                      <TableCell className="text-center">{item.COMP}</TableCell>
                      <TableCell className="text-center">{item.VALOR}</TableCell>
                      <TableCell className="text-center">{item.ARQUIVO}</TableCell>
                      <TableCell className="text-center">{item.EMPRESA}</TableCell>
                      <TableCell className="text-center">{item.CARONA}</TableCell>
                      <TableCell className="text-center">{item.ESPECIETCE}</TableCell>
                      <TableCell className="text-center">{item.ESPECIETCE_NRO}</TableCell>
                      <TableCell className="text-center">{item.DTENV}</TableCell>
                      <TableCell className="text-center">{item.HORENV}</TableCell>
                      <TableCell className="text-center">{item.CHAMADAPUB}</TableCell>
                      <TableCell className="text-center">{item.CODTCE}</TableCell>
                      <TableCell className="text-center">{item.ORCAMENTO_SIGILOSO}</TableCell>
                      <TableCell className="text-center">{item.VALOR1}</TableCell>
                      <TableCell className="text-center">{item.EDITAL}</TableCell>
                      <TableCell className="text-center">{item.PARTICIPANTES}</TableCell>
                      <TableCell className="text-center">{item.CPFCNPJ}</TableCell>
                      <TableCell className="text-center">{item.NOMEEMPRESA}</TableCell>
                      <TableCell className="text-center">{item.ARTIGO_INCISO}</TableCell>
                      <TableCell className="text-center">{item.DTPROPOSTAINI}</TableCell>
                      <TableCell className="text-center">{item.DTPROPOSTAFIM}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
