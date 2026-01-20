export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  sizes: string[];
  colors: string[]; // hex codes
  description: string;
}

export interface CartItem {
  id?: string; // Unique ID for the cart entry (optional for now as old items might not have it)
  productId: string;
  name: string;
  price: number;
  size: string;
  color: string;
  qty: number;
  image: string;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPayment: number;
}

export interface Order {
  orderId: string;
  items: CartItem[];
  totalPayment: number;
  createdAt: string;
  status: 'pending' | 'success';
}
