import { OrdersBoard } from '../OrdersBoard'
import { Container } from './styles'
import { orders } from '../../mocks/orders'

export const Orders = () => {
  return (
    <Container>
      <OrdersBoard icon="⏲️" title="Fila de espera" orders={orders}/>
      <OrdersBoard icon="👨‍🍳" title="Em preparação" orders={[]}/>
      <OrdersBoard icon="✔️" title="Pronto!" orders={[]}/>
    </Container>
  )
}