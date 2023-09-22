export type Dish = {
  id: string,
  name: string,
  price: number,
  dishIngredients: {
    id: string,
    dishId: string,
    ingredientId: string,
    quantityPerDish: number
  }[]
}
