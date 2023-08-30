import { Board, OrdersContainer } from './styles'
import { Order } from '../../types/Order'

interface OrdersBoardsProps {
  icon: string
  title: string
  orders: Order[]
}

export const OrdersBoard = ({ icon, title, orders }: OrdersBoardsProps) => {
  return (
    <Board>
      <header>
        <span>{icon} </span>
        <strong>{title} </strong>
        <span>(2)</span>
      </header>

      <OrdersContainer>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrdersContainer>
    </Board>
  )
}