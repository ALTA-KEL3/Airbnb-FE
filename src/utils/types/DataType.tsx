export interface DataTypes {}

export interface FeedbackProps {
  id: string;
  profil?: string;
  name?: string;
  rating?: number;
  ulasan?: string;
}

export interface HomestayType {
  id: number;
  user_id: number;
  name: string;
  address: string;
  rating: number;
  phone: number;
  price: number;
  facility: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
}

export interface HomeType {
  id?: any;
  name?: string;
  address?: string;
  rating?: number;
  phone?: number;
  price?: number;
  facility?: string;
  image?: string;
  image1?: string;
  image2?: string;
  image3?: string;
}
