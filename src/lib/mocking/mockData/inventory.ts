import { Company, Product, ProductType } from '../../../typings/generated'

export const companies: Company[] = [
  { id: '1', name: 'Nike' },
  { id: '2', name: 'Vans' },
  { id: '3', name: 'Etnies' },
]

export const products: Product[] = [
  { id: '1', companyId: '1', name: 'Nyjahs', type: ProductType.Footwear },
  { id: '2', companyId: '1', name: 'Janoski', type: ProductType.Footwear },
  {
    id: '3',
    companyId: '2',
    name: 'Old School Pro',
    type: ProductType.Footwear,
  },
  { id: '4', companyId: '2', name: 'Sk8 Hi', type: ProductType.Footwear },
  { id: '4', companyId: '2', name: 'Windbreaker', type: ProductType.Clothing },
  { id: '6', companyId: '3', name: 'Joslin', type: ProductType.Footwear },
  { id: '7', companyId: '3', name: 'Marana', type: ProductType.Footwear },
  {
    id: '8',
    companyId: '3',
    name: 'Fader Backpack',
    type: ProductType.Accessories,
  },
]
