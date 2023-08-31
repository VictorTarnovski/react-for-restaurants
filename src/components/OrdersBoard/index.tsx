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
        <span>({orders.length})</span>
      </header>
      { orders.map((order) => (
        <OrdersContainer key={order._id}>
          <button type="button">
            <strong>{order.table}</strong>
            <span>{order.products.length} itens</span>
          </button>
        </OrdersContainer>
      ))}
    </Board>
  )
}