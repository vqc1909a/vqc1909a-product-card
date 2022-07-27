export interface onChangeArgs{
  product: Product,
  count: number
}
export interface Product {
  id: string,
  title: string,
  img?: string,
  count?: number
}
export interface InitialValues {
  count?: number,
  maxCount?: number
}
export interface ProductCardHandlers {
  count: number,
  isMaxCountReached?: boolean,
  maxCount?: number,
  product: Product,
  increaseBy: (value: number) => void,
  reset: () => void
}
