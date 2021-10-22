import { Order } from '../../typings/generated'
import { orders } from '../../mockData/order'

/**
 *
 * The following functions could be calls to an external service
 * that return different types of inventory data.
 */
export const getOrdersData = (): Order[] => orders
