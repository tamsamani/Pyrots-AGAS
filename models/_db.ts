
export const DBSYMBOL_TABLE_NAME = Symbol.for("@name");

export function setName(name: string) {
  return function(self) {
    self[DBSYMBOL_TABLE_NAME] = name;
  }
}

export function setLink() {
  return function(self){
    
  }
}

export class DBEntity {
  readonly id: number | string;
  readonly createdAt: Date | number | string;
  readonly updatedAt: Date | number | string;
};
