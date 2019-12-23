import Food from "../src/food"

describe("Food", () => {

  describe("#name", () => {
    it("sets and gets a name", () => {
      const food = new Food({ name: "Broccoli" });
      expect(food.name).toEqual("Broccoli");
    });
  });

});
