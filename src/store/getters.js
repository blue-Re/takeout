import { reqFoodCategorys } from "../api"

/* 包含多个基于state的getter计算属性 */
export default {
  totalCount(state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
  },

  totalPrice(state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
  },
}