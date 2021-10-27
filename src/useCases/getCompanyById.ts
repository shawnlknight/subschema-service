import { Company } from '../typings/generated'
import { getCompanies } from '.'

export const getCompanyById = (id: string): Company => {
  const companies = getCompanies()
  return companies.find((company) => company.id === id)
}
