import { IMockStore } from '@graphql-tools/mock'
import { datatype } from 'faker'
import { generateProduct, generateCompany } from './generateMocks'
// import { getRandomItemFromList } from './generateMocks'

export const seedMocks = (store: IMockStore): void => {
  const products = [...Array.from({ length: 10 }, () => generateProduct())].map(
    (product) => store.get('Product', datatype.uuid(), product),
  )
  const companies = [...Array.from({ length: 3 }, () => generateCompany())].map(
    (company) => store.get('Company', datatype.uuid(), company),
  )
  store.set('Query', 'ROOT', 'products', products)
  store.set('Query', 'ROOT', 'companies', companies)
}
