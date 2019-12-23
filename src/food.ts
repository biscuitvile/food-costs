class Food {
  name: string;

  constructor(attributes: { [key: string]: string }) {
    this.name = attributes["name"];
  }
}

export default Food
