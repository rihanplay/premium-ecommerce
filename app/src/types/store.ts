export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  featured?: boolean;
};

export type ProductVariant = {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  attributes: Record<string, string>;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  sku: string;
  shortDescription: string;
  description: string;
  price: number;
  compareAtPrice: number;
  discount: number;
  costPrice: number;
  stock: number;
  lowStockThreshold: number;
  category: string;
  subcategory: string;
  brand: string;
  images: string[];
  thumbnail: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  featured: boolean;
  bestSeller: boolean;
  newArrival: boolean;
  isPublished: boolean;
  variants: ProductVariant[];
  seoTitle: string;
  seoDescription: string;
};

export type Review = {
  id: string;
  customer: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
};

export type Banner = {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  desktopImage: string;
  mobileImage: string;
  position: string;
};

export type Order = {
  id: string;
  customer: string;
  total: number;
  status: string;
  date: string;
  paymentStatus: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  totalSpent: number;
  orders: number;
  active: boolean;
};
