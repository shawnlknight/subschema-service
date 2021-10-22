import { Company } from '../typings/generated'
import { getCompaniesData } from '../services/inventory'

export const getCompanies = (): Company[] => getCompaniesData()
