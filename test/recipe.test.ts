import Recipe from "../src/recipe"
import Ingredient from "../src/ingredient"
import Food from "../src/food"
import Amount from "../src/amount"

describe("Recipe", () => {
  let food = new Food({ name: "Cheeze Whiz" });
  let amount = new Amount({ quantity: 55, unit: "tsp" });

  let ingredient = new Ingredient({
    food: food,
    amount: amount,
    preparation: "diced"
  });

  let recipe = new Recipe({
    name: "Texas Toast",
    ingredients: [ingredient]
  });

  describe("#name", () => {
    it("sets and gets a name", () => {
      expect(recipe.name).toEqual("Texas Toast");
    });
  });

  describe("#ingredients", () => {
    it("sets and gets ingredients", () => {
      expect(recipe.ingredients).toEqual([ingredient]);
    });
  });
});
