var Database = /** @class */ (function () {
    function Database() {
        this.datas = [];
    }
    Database.prototype.saveData = function (data) {
        this.datas.push(data);
    };
    Database.prototype.getAll = function () {
        return this.datas;
    };
    return Database;
}());
var stringDb = new Database();
stringDb.saveData("hello");
stringDb.saveData("goodbye");
var datas = stringDb.getAll(); // const datas: string[]
console.log(datas);
