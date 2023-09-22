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
        orderId: '93690910-3914-4e16-bcf0-d031e234ccc2',
        dishId: '17c22b06-b716-4a87-ada6-940f18b6e51f',
        quantityPerOrder: 2
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