export function formatCurrency(value: string): string {
  const number = Number(value.replace(',', '.'))

  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
