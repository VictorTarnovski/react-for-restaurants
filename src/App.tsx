import { GlobalStyles } from './styles/GlobalStyles'
import { Header } from './components/Header'
import { Orders } from './components/Orders'
import { OrdersContextProvider } from './contexts/OrdersContext'

import { orders as mockedOrders } from './mocks/orders'


export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <OrdersContextProvider initial={mockedOrders}>
        <Orders />
      </OrdersContextProvider>
    </>
  )
}