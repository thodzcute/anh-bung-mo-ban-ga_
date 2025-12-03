
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'chicken' | 'burger' | 'combo' | 'side' | 'drink';
  isPromo?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
  location: string;
}

export interface Store {
  id: number;
  name: string;
  address: string;
  city: 'hcm' | 'hn';
  district: string;
  openTime: string;
  mapUrl: string;
  image: string;
}

export interface PartyCombo {
  id: string;
  name: string;
  description: string;
  items: string[];
  price: number;
  image: string;
  recommendedFor: string;
}

export interface User {
  name: string;
  phone: string;
  avatar?: string;
}

export interface Voucher {
  id: string;
  code: string;
  discount: string;
  description: string;
  color: string;
}

export interface PromoBanner {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  bgColor: string;
  textColor: string;
  cols: number;
  rows: number;
}

// Updated Category interface
export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string; // New image field
}

export type TabType = 'must-try' | 'promo';
export type PaymentMethod = 'cod' | 'momo' | 'banking';
