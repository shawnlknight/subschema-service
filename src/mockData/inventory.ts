import { Company, Product } from '../typings/generated'

export const companies: Company[] = [
  { id: 1, name: 'Nike' },
  { id: 2, name: 'Vans' },
  { id: 3, name: 'Etnies' },
]

export const products: Product[] = [
  { id: 1, companyId: 1, name: 'Nyjahs' },
  { id: 2, companyId: 1, name: 'Janoski' },
  { id: 3, companyId: 2, name: 'Old School Pro' },
  { id: 4, companyId: 2, name: 'Sk8 Hi' },
  { id: 5, companyId: 3, name: 'Joslin' },
  { id: 6, companyId: 3, name: 'Marana' },
]
