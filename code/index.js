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
// const user1 = new Player({
//   username: "Franck",
//   age: 35,
//   XP: 234,
//   defense: 154,
//   attack: 54,
// });
// type Elements = "fire" | "ice" | "water" | "stone";
// class Wizard extends Player {
//   mana: number;
//   element: Elements;
//   constructor({ mana, element, ...rest }: Wizard) {
//     super({ ...rest });
//     this.mana = mana;
//     this.element = element;
//   }
// }
// const wizard1 = new Wizard({
//   username: "Franck",
//   age: 35,
//   XP: 234,
//   defense: 154,
//   attack: 54,
//   mana: 256,
//   element: "fire",
// });
// console.log(wizard1);
var Player = /** @class */ (function () {
    function Player(username, age, XP, defense, attack) {
        this.username = username;
        this.age = age;
        this.XP = XP;
        this.defense = defense;
        this.attack = attack;
    }
    Player.prototype.getAge = function () {
        return this.age;
    };
    Player.prototype.getAttack = function () {
        return this.attack;
    };
    Player.prototype.setAttack = function (newAttack) {
        this.attack = newAttack;
    };
    return Player;
}());
var user1 = new Player("Franck", 35, 234, 154, 54);
console.log(user1.getAge()); //
