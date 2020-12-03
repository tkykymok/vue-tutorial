import {Entity} from '@/interfaces/entity';

export class OrderItem implements Entity {
  id: number;
  product_title: string;
  price: number;
  quantity: number;

  constructor(id: number, product_title: string, price: number, quantity: number) {
    this.id = id;
    this.product_title = product_title;
    this.price = price;
    this.quantity = quantity;
  }
}