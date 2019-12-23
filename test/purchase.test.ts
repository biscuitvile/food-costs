import Purchase from "../src/purchase"
import Food from "../src/food"
import Amount from "../src/amount"

describe("Purchase", () => {
  let broccoli = new Food({ name: "Broccoli" });
  let amount = new Amount({ quantity: 42, unit: "oz" });

  describe("#food", () => {
    it("sets and gets a food", () => {
      const purchase = new Purchase({ food: broccoli });
      expect(purchase.food.name).toEqual("Broccoli");
    });
  });

  describe("#amount", () => {
    it("sets and gets an amount", () => {
      const purchase = new Purchase({ amount: amount });
      expect(purchase.amount).toEqual(amount);
    });
  });

  describe("#price", () => {
    it("sets and gets a price", () => {
      const purchase = new Purchase({ price: 20.25 });
      expect(purchase.price).toEqual(20.25);
    });
  });

  describe("#date", () => {
    it("sets and gets a date", () => {
      let date = new Date
      const purchase = new Purchase({ date: date });
      expect(purchase.date).toEqual(date);
    });
  });

  describe("#name", () => {
    it("delegates to its food", () => {
      const purchase = new Purchase({ food: broccoli });
      expect(purchase.name).toEqual("Broccoli");
    });
  });

  describe("#quantity", () => {
    it("delegates to its amount", () => {
      const purchase = new Purchase({ amount: amount });
      expect(purchase.quantity).toEqual(42);
    });
  });

  describe("#unit", () => {
    it("delegates to its amount", () => {
      const purchase = new Purchase({ amount: amount });
      expect(purchase.unit).toEqual("oz");
    });
  });
});
