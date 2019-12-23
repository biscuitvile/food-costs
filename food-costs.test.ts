import FoodCosts from './food-costs'

describe('FoodCosts', () => {

  it('foos', () => {
    const costs = new FoodCosts
    expect(costs.foo).toEqual("bar")
  })
})
