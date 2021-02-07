// class Player {
//   username: string;
//   age: number;
//   XP: number;
//   defense: number;
//   attack: number;

//   constructor(obj: Player) {
//     for (const field in obj) {
//       this[field] = obj[field];
//     }
//   }
// }

class Player {
  constructor(
    public username: string,
    private age: number,
    public XP: number,
    public defense: number,
    private attack: number,
    readonly DbId: string
  ) {}

  // setDbId(newId) {
  //   this.DbId = newId;
  // }
  /* TS error "Cannot assign to 'DbId' because it 
  is a read-only property."*/
}

const player1 = new Player(
  "Franck",
  35,
  234,
  154,
  54,
  "602053dd84b6b39fdf08f8cd"
);

console.log(player1.DbId); // log "602053dd84b6b39fdf08f8cd"
