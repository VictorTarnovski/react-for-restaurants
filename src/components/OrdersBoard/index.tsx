import { Board, OrdersContainer } from './styles'
import { OrderWithRelatedInfo } from '../../types/Order'
import { useState } from 'react'
import { OrderModal } from '../OrderModal'

interface OrdersBoardsProps {
  icon: string
  title: string
  orders: OrderWithRelatedInfo[]
}

export const OrdersBoard = ({ icon, title, orders }: OrdersBoardsProps) => {
  const [ isModalVisible, setIsModalVisible ] = useState(false)
  const [ selectedOrder, setSelectedOrder ] = useState<OrderWithRelatedInfo | null>(null)

  const handleOpenModal = (order: OrderWithRelatedInfo | null) => {
    setIsModalVisible(!isModalVisible)
    setSelectedOrder(order)
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setIsModalVisible(false)
      setSelectedOrder(null)
    }
  })

  return (
    <Board>
      <OrderModal visible={isModalVisible} setIsVisible={setIsModalVisible} order={selectedOrder}/>
      <header>
        <span>{icon} </span>
        <strong>{title} </strong>
        <span>({orders.length})</span>
      </header>
      { orders.length > 0 && (orders.map((order) => (
        <OrdersContainer key={order.id}>
          <button type="button" onClick={() => { return handleOpenModal(order) }}>
            <strong>Mesa {order.table.name}</strong>
            <span>{order.orderDishes.length} itens</span>
          </button>
        </OrdersContainer>
      )))}
    </Board>
  )
}