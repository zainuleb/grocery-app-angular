import { Grocery } from '../groceries/interfaces/grocery.interface';

export interface Cart {
  item: Grocery;
  quantity: number;
}
