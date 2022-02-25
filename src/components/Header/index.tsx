import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./styles"

interface HeaderProps {
  onOpenTransacionModal: () => void
}

export function Header({ onOpenTransacionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenTransacionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
