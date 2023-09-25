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

  const handleCloseModal = () => {
    setIsModalVisible(false)
    setSelectedOrder(null)
  }

  const sumTotalOrderQuantity = (order: OrderWithRelatedInfo): number => order.orderDishes.reduce((total, orderDish) => total + orderDish.quantityPerOrder, 0)

  return (
    <Board>
      <OrderModal onClose={handleCloseModal} visible={isModalVisible} order={selectedOrder}/>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      { orders.length > 0 && (orders.map((order) => (
        <OrdersContainer key={order.id}>
          <button type="button" onClick={() => handleOpenModal(order)}>
            <strong>Mesa {order.table.name}</strong>
            <span>{sumTotalOrderQuantity(order)} itens</span>
          </button>
        </OrdersContainer>
      )))}
    </Board>
  )
}