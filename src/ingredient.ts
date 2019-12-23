import Food from "./food"
import Amount from "./amount"

class Ingredient {
  food: Food;
  amount: Amount;
  preparation: string = "";

  constructor(attributes: { [key: string]: any }) {
    this.food = attributes["food"];
    this.amount = attributes["amount"];
    this.preparation = attributes["preparation"];
  }
}

export default Ingredient
