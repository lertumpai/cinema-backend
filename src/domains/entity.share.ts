import { v4 as uuidv4 } from 'uuid';

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
};

export abstract class Entity<T> {
  protected readonly _id: uuidv4;
  protected props: T;

  protected constructor (props: T, id?: uuidv4) {
    this._id = id ? id : uuidv4();
    this.props = props;
  }

  public equals (object?: Entity<T>) : boolean {

    if (object === null || object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    return this._id.equals(object._id);
  }
}