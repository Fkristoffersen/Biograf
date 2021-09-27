export class Film {
  constructor(
      public FilmID: number,
      public Titel: string,
      public RunTime: number,
      public StartDate: Date,
      public EndDate: Date,
      public Picture: string
  ) { }
}
