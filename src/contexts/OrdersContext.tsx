import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from 'react'
import { Order } from '../types/Order'

interface OrdersContextType {
  orders: Order[]
  setOrders: Dispatch<SetStateAction<Order[]>>
}

interface OrdersContextProviderProps {
  children: ReactNode
  initial?: Order[]
}
export const OrdersContext = createContext<OrdersContextType>({
  orders: [],
  setOrders: () => {}
})

export const OrdersContextProvider: FC<OrdersContextProviderProps> = ({ children, initial = [] }: OrdersContextProviderProps) => {
  const [orders, setOrders] = useState<Order[]>(initial)

  return (
    <OrdersContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrdersContext.Provider>)
}