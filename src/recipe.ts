import Ingredient from "./ingredient"

class Recipe {
  name: string = "";
  ingredients: Array<Ingredient> = [];

  constructor(attributes: { [key: string]: any }) {
    this.name = attributes["name"];
    this.ingredients = attributes["ingredients"];
  }
}

export default Recipe
