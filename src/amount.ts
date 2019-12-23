class Amount {
  quantity!: number;
  unit!: string;

  constructor(attributes: { [key: string]: any }) {
    this.quantity = attributes["quantity"];
    this.unit = attributes["unit"];
  }
}

export default Amount
