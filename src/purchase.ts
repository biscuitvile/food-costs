import Store from "./store"
import Food from "./food"
import Amount from "./amount"

class Purchase {
  id?: number;
  food: Food;
  amount: Amount;
  price: number;
  date: Date;

  constructor(attributes: { [key: string]: any } = {}) {
    this.food = attributes["food"];
    this.amount = attributes["amount"];
    this.price = attributes["price"];
    this.date = attributes["date"];
    this.id = undefined;
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

  save(): Purchase {
    const record = Purchase.find(this.id);

    if (record) {
      const index = Store.purchases.indexOf(record);
      Store.purchases[index] = this
    } else {
      this.id = Store.purchases.length + 1;
      Store.purchases.push(this);
    }

    return this;
  }

  destroy(): boolean {
    const record = Purchase.find(this.id);

    if (record) {
      const index = Store.purchases.indexOf(record);
      Store.purchases = Store.purchases.splice(index + 1, 1);

      return true
    }

    return false;
  }

  public static find(id: number | undefined): Purchase | undefined {
    return Store.purchases.find(record => record.id == id);
  }
}

export default Purchase
