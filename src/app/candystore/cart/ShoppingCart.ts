export class CartObj {
  constructor(
      public CustomerID: number,
      public OrderID: number,
      public CandyID: number,
      public Quantity: number,
      public Date: string,
      public Total: number,
  ) { }
}
