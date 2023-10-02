import { OrdersBoard } from '../OrdersBoard'
import { Container } from './styles'
import { tables } from '../../mocks/tables'
import { dishes } from '../../mocks/dishes'
import { Order, OrderDish, OrderDishWithRelatedInfo, OrderWithRelatedInfo, OrderStatusIcons, OrderStatusLabel } from '../../types/Order'
import { Table } from '../../types/Table'
import { useContext, useEffect } from 'react'
import { OrdersContext } from '../../contexts/OrdersContext'

const findRelatedTable = (id: string): Table | undefined => {
  return tables.find((table) => table.id === id)
}

const findRelatedOrderDish = (orderDishes: OrderDish[]): OrderDishWithRelatedInfo[] => {
  const orderDishesToReturn: OrderDishWithRelatedInfo[] = []

  for (const orderDish of orderDishes) {
    const { dishId, ...rest } = orderDish

    for (const dish of dishes) {
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

const mapOrders = (orders: Order[]) => {
  const waitingOrders = []
  const inProcessOrders = []
  const finishedOrders = []

  for (const order of orders) {
    switch (order.status) {
    case 'WAITING':
      waitingOrders.push(order)
      continue
    case 'IN_PROCESS':
      inProcessOrders.push(order)
      continue
    case 'FINISHED':
      finishedOrders.push(order)
      continue
    }
  }
  return { waitingOrders, inProcessOrders, finishedOrders }
}

export const Orders = () => {
  const { orders } = useContext(OrdersContext)

  const { waitingOrders, inProcessOrders, finishedOrders } = mapOrders(orders)

  useEffect(() => {}, [orders])

  return (
    <Container>
      <OrdersBoard icon={OrderStatusIcons.WAITING} title={OrderStatusLabel.WAITING} orders={findRelatedOrderInfo(waitingOrders)} />
      <OrdersBoard icon={OrderStatusIcons.IN_PROCESS} title={OrderStatusLabel.IN_PROCESS} orders={findRelatedOrderInfo(inProcessOrders)} />
      <OrdersBoard icon={OrderStatusIcons.FINISHED} title={OrderStatusLabel.FINISHED} orders={findRelatedOrderInfo(finishedOrders)} />
    </Container>
  )
}