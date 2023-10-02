import { DishIngredient } from './DishIngredient'

export type Dish = {
  id: string,
  name: string,
  price: number,
  dishIngredients: DishIngredient[]
}
