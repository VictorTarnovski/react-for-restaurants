import { GlobalStyles } from './styles/GlobalStyles'

import { Header } from './components/Header'
import { Orders } from './components/Orders'

export const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Orders/>
    </>
  )
}