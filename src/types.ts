export type TypeRating = {
  rate: number;
  count: number;
}

export type TypeProduct = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: TypeRating;
  title: string;
}