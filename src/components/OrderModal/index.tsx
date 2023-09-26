import { ModalBody, Overlay, OrderDetails, Actions } from './styles'
import closeIcon from '../../assets/images/close-icon.svg'
import { OrderWithRelatedInfo } from '../../types/Order'
import { OrderStatusIcons, OrderStatusLabel } from '../../types/Order'
import { useContext, useEffect } from 'react'
import { OrdersContext } from '../../contexts/OrdersContext'

interface OrderModalProps {
  visible: boolean
  order: OrderWithRelatedInfo | null
  onClose: () => void
}

export const OrderModal = ({ visible, order, onClose }: OrderModalProps) => {
  if (!visible || !order) return null

  const { orders, setOrders } = useContext(OrdersContext)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      event.key === 'Escape' ? onClose() : null
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleOrderStatusChange = () => {
    const tempOrders = [...orders]
    const i = tempOrders.findIndex(o => o.id === order.id)
    tempOrders[i].status = (tempOrders[i].status === 'WAITING' ? 'IN_PROCESS' : 'FINISHED')
    setOrders(tempOrders)
    onClose()
  }

  const handleOrderCancel = () => {
    const tempOrders = [...orders]
    const i = tempOrders.findIndex(o => o.id === order.id)
    tempOrders.splice(i, 1)
    setOrders(tempOrders)
    onClose()
  }

  return (
    <Overlay>
      <ModalBody>

        <header>
          <strong> Mesa {order.table.name} </strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Ícone de fechar"></img>
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>{OrderStatusIcons[order.status]}</span>
            <strong>{OrderStatusLabel[order.status]}</strong>
          </div>
        </div>

        <OrderDetails>
          <strong> Itens </strong>

          <div className="order-items">
            {order.orderDishes.map((orderDish) => (
              <div className="item" key={orderDish.id}>

                <div className="product-details">
                  <strong> {orderDish.dish.name} </strong>
                </div>

                <span className="quantity">x{orderDish.quantityPerOrder}</span>

              </div>
            ))}
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'FINISHED' && (
            <>
              <button type="button" className="primary" onClick={handleOrderStatusChange}>
                Mover para:
                <span>{order.status === 'WAITING' ? OrderStatusIcons.IN_PROCESS : OrderStatusIcons.FINISHED}</span>
                <strong>{order.status === 'WAITING' ? OrderStatusLabel.IN_PROCESS : OrderStatusLabel.FINISHED}</strong>
              </button>

              <button type="button" className="secondary" onClick={handleOrderCancel}>Cancelar pedido</button>
            </>)}
        </Actions>
      </ModalBody>
    </Overlay>
  )
}