import Modal from "react-modal"
import { FormEvent, useState } from "react"
import { useTransactions } from "../../hooks/useTransactions"
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { Container, TransactionTypeContainer, RadioBox } from "./styles"

Modal.setAppElement("#root")

interface TransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function TransactionModal({
  isOpen,
  onRequestClose
}: TransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState("")
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState("")
  const [type, setType] = useState("deposit")

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    await createTransaction({
      category,
      title,
      type,
      value
    })
    cleanStates()
    onRequestClose()
  }

  function cleanStates() {
    setTitle("")
    setValue(0)
    setCategory("")
    setType("deposit")
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={e => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => {
              setType("deposit")
            }}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => {
              setType("withdraw")
            }}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
