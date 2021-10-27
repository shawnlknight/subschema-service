import { getCompaniesData } from '../services/inventory'
import { Company } from '../typings/generated'

export const getCompanyForProduct = (id: string): Company => {
  const companies = getCompaniesData()
  return companies.find((company) => company.id === id)
}
