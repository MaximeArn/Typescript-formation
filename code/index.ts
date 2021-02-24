class Database<T> {
  private datas: T[] = [];

  saveData(data: T): void {
    this.datas.push(data);
  }

  getAll(): T[] {
    return this.datas;
  }
}

const stringDb = new Database<string>();
// set the typeof T at the instantiation

stringDb.saveData("hello");
stringDb.saveData("goodbye");

const datas = stringDb.getAll(); // const datas: string[]
console.log(datas); // ["hello", "goodbye"]
