export class CandyShop {
  constructor(
      public CandyID: number,
      public Name: string,
      public Size: string,
      public Price: number,
      public Picture: string,
  ) { }
}

export class Film {
  constructor(
      public FilmID: number,
      public Titel: string,
      public RunTime: number,
      public StartDate: Date,
      public EndDate: Date,
      public Picture: string,
  ) { }
}

export class Customer {
  constructor(
      public CustomerID: number,
      public Firstname: string,
      public Lastname: string,
      public Email: string,
      public Address: string,
      public Zipcode: number,
      public Password: string,
  ) { }
}
