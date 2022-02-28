import { useTransactions } from "../../hooks/useTransactions"
import { Container } from "./styles"

function getValueFormattedAsCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value)
}

function getCreatedAtFormatted(date: string) {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(date))
}

export function TransactionsTable() {
  const { transactions } = useTransactions()
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {getValueFormattedAsCurrency(transaction.value)}
              </td>
              <td>{transaction.category}</td>
              <td>{getCreatedAtFormatted(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
