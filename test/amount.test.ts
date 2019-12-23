import Amount from "../src/amount"

describe("Amount", () => {

  describe("#quantity", () => {
    it("gets and sets a quantity", () => {
      const amount = new Amount({ quantity: 42 });
      expect(amount.quantity).toEqual(42);
    });
  });

  describe("#unit", () => {
    it("gets and sets a unit", () => {
      const amount = new Amount({ unit: "oz" });
      expect(amount.unit).toEqual("oz");
    });
  });

});
