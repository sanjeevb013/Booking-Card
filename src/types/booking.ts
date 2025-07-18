export type Booking = {
  serviceName: string;
  imageUrl: string;
  provider: string;
  price: string;
    actualPrice?: string;
  discountPrice?: string;
  description?: string;
  location?: string;
  images?: string[];
}
