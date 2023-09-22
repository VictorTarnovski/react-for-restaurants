// import { Order } from '../../types/Order'
import { ModalBody, Overlay, OrderDetails } from './styles'
import closeIcon from '../../assets/images/close-icon.svg'
import { OrderWithRelatedInfo } from '../../types/Order'
import { OrderStatusIcons, OrderStatusLabel } from '../../types/Order'

interface OrderModalProps {
  visible: boolean
  setIsVisible: (isVisible: boolean) => void
  order: OrderWithRelatedInfo | null
}

export const OrderModal = ({ visible, setIsVisible, order }: OrderModalProps) => {
  if(!visible || !order) return null

  return (
    <Overlay>
      <ModalBody>

        <header>
          <strong> Mesa {order.table.name} </strong>
          <button type="button" onClick={() => setIsVisible(!visible)}>
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

          {order.orderDishes.map((orderDish) => {
            return (
              <div key={orderDish.id}>
                {orderDish.dishId}
              </div>
            )
          })}
        </OrderDetails>
      </ModalBody>
    </Overlay>
  )
}