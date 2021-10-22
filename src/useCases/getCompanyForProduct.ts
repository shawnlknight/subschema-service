import { getCompaniesData } from '../services/inventory'
import { Company } from '../typings/generated'

export const getCompanyForProduct = (id: number): Company => {
  const companies = getCompaniesData()
  return companies.find((company) => company.id === id)
}
