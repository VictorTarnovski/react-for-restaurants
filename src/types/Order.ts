import { Dish } from './Dish'
import { Table } from './Table'

export type Order = {
  id: string
  tableId: string
  status: 'WAITING' | 'IN_PROCESS' | 'FINISHED'
  orderDishes: OrderDish[]
}

export type OrderDish = {
  id: string
  orderId: string,
  dishId: string,
  quantityPerOrder: number
}

export type OrderWithRelatedInfo = Omit<Order, 'tableId' | 'orderDishes'> & { table: Table } & { orderDishes: OrderDishWithRelatedInfo[] }

export type OrderDishWithRelatedInfo = Omit<OrderDish, 'orderId' | 'dishId'> &
{
  dish: Dish
  quantityPerOrder: number
}

export const OrderStatusIcons = {
  WAITING: '⏲️',
  IN_PROCESS: '👨‍🍳',
  FINISHED: '✔️'
}

export const OrderStatusLabel = {
  WAITING: 'Fila de espera',
  IN_PROCESS: 'Em preparação',
  FINISHED: 'Pronto!'
}