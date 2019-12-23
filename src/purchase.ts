import Food from "./food"
import Amount from "./amount"

class Purchase {
  food: Food;
  amount: Amount;
  price: number;
  date: Date;

  constructor(attributes: { [key: string]: any }) {
    this.food = attributes["food"];
    this.amount = attributes["amount"];
    this.price = attributes["price"];
    this.date = attributes["date"];
  }

  get name(): string {
    return this.food.name;
  }

  get quantity(): number {
    return this.amount.quantity;
  }

  get unit(): string {
    return this.amount.unit;
  }
}

export default Purchase
