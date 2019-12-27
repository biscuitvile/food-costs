import Purchase from "../src/purchase"
import Store from "../src/store"
import Food from "../src/food"
import Amount from "../src/amount"

describe("Purchase", () => {
  let date = new Date();
  let broccoli = new Food({ name: "Broccoli" });
  let amount = new Amount({ quantity: 42, unit: "oz" });

  let purchase = new Purchase({
    food: broccoli,
    amount: amount,
    price: 20.25,
    date: date
  });

  afterEach(() => {
    Store.purchases = [];
  });

  describe("#food", () => {
    it("sets and gets a food", () => {
      expect(purchase.food.name).toEqual("Broccoli");
    });
  });

  describe("#amount", () => {
    it("sets and gets an amount", () => {
      expect(purchase.amount).toEqual(amount);
    });
  });

  describe("#price", () => {
    it("sets and gets a price", () => {
      expect(purchase.price).toEqual(20.25);
    });
  });

  describe("#date", () => {
    it("sets and gets a date", () => {
      expect(purchase.date).toEqual(date);
    });
  });

  describe("#name", () => {
    it("delegates to its food", () => {
      expect(purchase.name).toEqual("Broccoli");
    });
  });

  describe("#quantity", () => {
    it("delegates to its amount", () => {
      expect(purchase.quantity).toEqual(42);
    });
  });

  describe("#unit", () => {
    it("delegates to its amount", () => {
      expect(purchase.unit).toEqual("oz");
    });
  });

  describe("#id", () => {
    it("returns undefined before saved", () => {
      expect(purchase.id).toEqual(undefined);
    });

    it("auto-increments", () => {
      purchase.save();
      expect(purchase.id).toEqual(1);

      const anotherPurchase = new Purchase();
      expect(anotherPurchase.id).toEqual(undefined);

      anotherPurchase.save();
      expect(anotherPurchase.id).toEqual(2);
    });
  });

  describe("#save()", () => {
    it("persists into the store", () => {
      purchase.save();
      expect(Store.purchases).toEqual([purchase]);
    });

    it("updates already persisted records", () => {
      let purchase = new Purchase();

      expect(Store.purchases.length).toEqual(0);
      expect(purchase.id).toEqual(undefined);

      purchase.save();
      expect(purchase.id).toEqual(1);
      expect(Store.purchases.length).toEqual(1);

      purchase.save();
      expect(purchase.id).toEqual(1);
      expect(Store.purchases.length).toEqual(1);
    });

    it("returns self", () => {
      expect(purchase.save()).toEqual(purchase);
    });
  });

  describe(".find()", () => {
    it("returns a purchase by id", () => {
      purchase.save();
      expect(Store.purchases.length).toEqual(1);

      const anotherPurchase = new Purchase().save()
      expect(Store.purchases.length).toEqual(2);

      expect(Purchase.find(1)).toEqual(purchase);
      expect(Purchase.find(2)).toEqual(anotherPurchase);
    });
  });

  describe("#destroy()", () => {
    it("removes a purchase from the store", () => {
      purchase.save()
      expect(Store.purchases.length).toEqual(1);

      purchase.destroy()
      expect(Store.purchases.length).toEqual(0);
    });

    it("leaves other objects alone while deleting", () => {
      purchase.save();
      expect(Store.purchases[0]).toEqual(purchase);

      const anotherPurchase = new Purchase().save();
      expect(Store.purchases[1]).toEqual(anotherPurchase);

      expect(Store.purchases.length).toEqual(2);

      expect(purchase.destroy()).toEqual(true);
      expect(Store.purchases).toEqual([anotherPurchase]);
    });

    it("handles records not found", () => {
      let purchase = new Purchase();

      expect(Store.purchases.length).toEqual(0);
      expect(purchase.destroy()).toEqual(false);
    });
  });
});
