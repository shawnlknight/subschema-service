import { getOrdersData } from '../services/order'
import { Order } from '../typings/generated'

export const getOrderById = (id: number): Order => {
  const orders = getOrdersData()
  return orders.find((order) => order.id === id)
}
