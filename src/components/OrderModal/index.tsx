import { ModalBody, Overlay, OrderDetails, Actions } from './styles'
import closeIcon from '../../assets/images/close-icon.svg'
import { OrderWithRelatedInfo } from '../../types/Order'
import { OrderStatusIcons, OrderStatusLabel } from '../../types/Order'
import { useEffect } from 'react'

interface OrderModalProps {
  visible: boolean
  order: OrderWithRelatedInfo | null
  onClose: () => void
}

export const OrderModal = ({ visible, onClose, order }: OrderModalProps) => {
  if (!visible || !order) return null

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      event.key === 'Escape' ? onClose(): null
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

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

                <img
                  src=""
                  alt={orderDish.dish.name}
                  width="56"
                  height="28.51"
                />

                <span className="quantity">{orderDish.quantityPerOrder}x</span>

                <div className="product-details">
                  <strong> {orderDish.dish.name} </strong>
                </div>
              </div>
            ))}
          </div>
        </OrderDetails>

        <Actions>
          <button type="button" className="primary">
            <span>{OrderStatusIcons[order.status]}</span>
            <strong>{OrderStatusLabel[order.status]}</strong>
          </button>

          <button type="button" className="secondary">Cancelar pedido</button>
        </Actions>
      </ModalBody>
    </Overlay>
  )
}