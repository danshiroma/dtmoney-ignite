import { Container } from "./styles"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions"

function getValueFormattedAsCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value)
}

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.value
        acc.balance += transaction.value
      } else {
        acc.withdraws += transaction.value
        acc.balance -= transaction.value
      }

      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      balance: 0
    }
  )
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{getValueFormattedAsCurrency(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>{getValueFormattedAsCurrency(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{getValueFormattedAsCurrency(summary.balance)}</strong>
      </div>
    </Container>
  )
}
