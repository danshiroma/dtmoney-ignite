import { useState } from "react"
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { TransactionModal } from "./components/TransactionModal"
import { GlobalStyle } from "./styles/global"

export function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

  function handleOpenTransactionModal() {
    setIsTransactionModalOpen(true)
  }

  function handleCloseTransactionModal() {
    setIsTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenTransacionModal={handleOpenTransactionModal} />
      <Dashboard />
      <TransactionModal
        isOpen={isTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </>
  )
}
