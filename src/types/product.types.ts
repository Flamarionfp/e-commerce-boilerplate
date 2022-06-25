export interface Price {
  listPrice: number;
  salePrice: number;
}
export interface Product extends Price {
  id: string;
  primaryImageUrl: string;
  displayName: string;
  hasFreeDelivere: boolean;
  isDesired: boolean;
  rate: number;
  numberOfInstallments: number;
  installmentsPrice: number;
  percentageOff: number;
}