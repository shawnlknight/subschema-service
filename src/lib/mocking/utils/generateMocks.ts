import { commerce, company } from 'faker'
import { Product, ProductType, Company } from '../../../typings/generated'
import { DeepPartial } from '../../../typings/common'

export const getRandomItemFromList = <TReturn = unknown>(
  list: TReturn[],
): TReturn => list[Math.floor(Math.random() * list.length)]

const COMPANY_IDS = ['1', '2', '3', '4', '5', '6']

/**
 * generates a product
 */
export const generateProduct = (): DeepPartial<Product> => {
  const productTypes = [
    ProductType.Footwear,
    ProductType.Accessories,
    ProductType.Clothing,
  ]
  const productMock: Omit<Product, 'id'> = {
    unitPrice: commerce.price(),
    companyId: getRandomItemFromList(COMPANY_IDS),
    name: commerce.productName(),
    description: commerce.productDescription(),
    type: getRandomItemFromList(productTypes),
  }

  return productMock
}

/**
 * generates a company
 */
export const generateCompany = (): DeepPartial<Company> => {
  const companyMock: Omit<Company, 'id'> = {
    name: company.companyName(),
  }

  return companyMock
}
