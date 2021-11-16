export interface Grocery {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  ratings: {
    rate: number;
    count: number;
  };
}
