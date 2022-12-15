
interface IStorage{
  setItem<T>(key:string, item:T):T;
  getItem<T>(key:string):T;
}

export class StorageService implements IStorage{

  constructor() { 

  }

  localStorage = localStorage;

  setItem<T>(key: string, item: T): T {
    const str = typeof item === 'string' ? item : JSON.stringify(item)
    this.localStorage.setItem(key, str);
    return item
  }
  getItem<T>(key: string): any {
    let item;
    const tmp = this.localStorage.getItem(key) as any;
    if(!tmp){return null}
    try{
      item = JSON.parse(tmp)
    }catch{
      item = tmp
    }
    return item;
  }
}