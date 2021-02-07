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
var Player = /** @class */ (function () {
    function Player(username, age, XP, defense, attack, DbId) {
        this.username = username;
        this.age = age;
        this.XP = XP;
        this.defense = defense;
        this.attack = attack;
        this.DbId = DbId;
    }
    return Player;
}());
var player1 = new Player("Franck", 35, 234, 154, 54, "602053dd84b6b39fdf08f8cd");
console.log(player1.DbId); // log "602053dd84b6b39fdf08f8cd"
