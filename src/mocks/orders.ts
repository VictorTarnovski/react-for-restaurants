import { Order } from '../types/Order'
import { Table } from '../types/Table'

export const orders: Order[] = [
  {
    id: '6372e48cbcd195b0d3d0f7f3',
    status: 'WAITING',
    tableId: 'a49d0d4f-5f7a-46bb-a804-ba1a1c8740d3',
    orderDishes: [
      {
        id: '393f5311-f87a-4a9f-8722-dc4c3ec9c020',
        orderId: '6372e48cbcd195b0d3d0f7f3',
        dishId: '96701939-bf45-44e1-965f-09f456e5ddc3',
        quantityPerOrder: 2
      },
      {
        id: '393f5311-f87a-4a9f-8722-dc4c3ec9c021',
        orderId: '6372e48cbcd195b0d3d0f7f3',
        dishId: '96701939-bf45-44e1-965f-09f456e5dd11',
        quantityPerOrder: 3
      }
    ],
  }
]

export const tables: Table[] = [
  {
    id: 'a49d0d4f-5f7a-46bb-a804-ba1a1c8740d3',
    name: 'My Table'
  }
]