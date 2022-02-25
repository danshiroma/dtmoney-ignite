import { useEffect } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions")
  }, [])

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
          <tr>
            <td>Site</td>
            <td className="deposit">R$12000,00</td>
            <td>Freela</td>
            <td>25/02/2022</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td className="withdraw">- R$7000,00</td>
            <td>Upgrade</td>
            <td>25/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
