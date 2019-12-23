import Ingredient from "../src/ingredient"
import Food from "../src/food"
import Amount from "../src/amount"

describe("Ingredient", () => {
  let food = new Food({ name: "Cheeze Whiz" });
  let amount = new Amount({ quantity: 55, unit: "tsp" });

  let ingredient = new Ingredient({
    food: food,
    amount: amount,
    preparation: "diced"
  });

  describe("#food", () => {
    it("sets and gets a food", () => {
      expect(ingredient.food).toEqual(food);
    });
  });

  describe("#amount", () => {
    it("sets and gets an amount", () => {
      expect(ingredient.amount).toEqual(amount);
    });
  });

  describe("#preparation", () => {
    it("sets and gets a preparation", () => {
      expect(ingredient.preparation).toEqual("diced");
    });
  });
});
