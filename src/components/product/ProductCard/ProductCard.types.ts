import { Product } from '@/types'

export type VariantType = 'showcase';

export interface ProductCardProps extends Product {
  variant: VariantType
}