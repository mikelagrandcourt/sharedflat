import { Item } from './item';
export { Item } from './item';
export class User {
  constructor(public name: string, public items: Item[]){ }
}
