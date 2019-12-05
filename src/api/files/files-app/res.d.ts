export interface IResIosApp {
  id: number
  icon: string
  name: string
  developer: string
  category: string
  source: string
  version: string
  price: string
  socre: number
  status: string
  editor: string
  updateDate: string
  [name: string]: string | number
}
