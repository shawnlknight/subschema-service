import { Order, OrderStatus } from '../typings/generated'

export const orders: Order[] = [
  {
    id: 1,
    status: OrderStatus.Confirmed,
  },
  {
    id: 2,
    status: OrderStatus.Open,
  },
  {
    id: 3,
    status: OrderStatus.Processing,
  },
]
