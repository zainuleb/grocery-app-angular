export interface Order {
  orderItems: OrderItems[];
  userId: string;
  total: number;
  discount: number;
  shippingAddress: string[];
}

export interface OrderItems {
  quantity: number;
  productId: number;
  price: number;
}
