import { OrdersBoard } from '../OrdersBoard'
import { Container } from './styles'
import { orders } from '../../mocks/orders'
import { tables } from '../../mocks/tables'
import { dishes } from '../../mocks/dishes'
import { Order, OrderDish, OrderDishWithRelatedInfo, OrderWithRelatedInfo, OrderStatusIcons, OrderStatusLabel } from '../../types/Order'
import { Table } from '../../types/Table'

const findRelatedTable = (id: string): Table | undefined => {
  return tables.find((table) => table.id === id)
}

const findRelatedOrderDish = (orderDishes: OrderDish[]): OrderDishWithRelatedInfo[] => {
  const orderDishesToReturn: OrderDishWithRelatedInfo[] = []

  for (const orderDish of orderDishes) {
    const { dishId,...rest } = orderDish

    for(const dish of dishes) {
      if (dishId === dish.id) {
        orderDishesToReturn.push({ ...rest, dish })
      } else {
        continue
      }
    }

  }
  return orderDishesToReturn
}

const findRelatedOrderInfo = (orders: Order[]): OrderWithRelatedInfo[] => {
  const relatedOrders: OrderWithRelatedInfo[] = orders.map((order) => {
    const { id, orderDishes: orderDishesToRelate, status, tableId } = order
    const table = findRelatedTable(tableId)
    const orderDishes = findRelatedOrderDish(orderDishesToRelate)
    return { id, status, table: table!, orderDishes }
  })
  return relatedOrders
}

export const Orders = () => {
  return (
    <Container>
      <OrdersBoard icon={OrderStatusIcons.WAITING} title={OrderStatusLabel.WAITING} orders={findRelatedOrderInfo(orders)}/>
      <OrdersBoard icon={OrderStatusIcons.IN_PROCESS} title={OrderStatusLabel.IN_PROCESS} orders={[]}/>
      <OrdersBoard icon={OrderStatusIcons.FINISHED} title={OrderStatusLabel.FINISHED} orders={[]}/>
    </Container>
  )
}