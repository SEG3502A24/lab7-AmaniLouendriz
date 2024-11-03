export class Author {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public books?:Book[],
        public bio?: string,
      ){}
}

export class Book {
  constructor(
    public id:number,
    public title:string,
    public year:number,
  ){}
}

export class Bio {
  constructor(
    public id:number,
    public biodata:string,
  ){}
}