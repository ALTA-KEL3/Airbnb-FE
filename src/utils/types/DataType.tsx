export interface TripType {
  name: string;
  check_in: string;
  check_out: string;
  day: string;
  price: string;
  total: string;
}

export interface FeedbackProps {
  id: string;
  profil?: string;
  name?: string;
  rating?: number;
  ulasan?: string;
}

export interface FeedbackType {
  id?: string;
  profile_picture?: string;
  name?: string;
  rating?: number;
  note?: string;
}

export interface HomestayType {
  id?: number;
  user_id?: number;
  name?: string;
  address?: string;
  total_rating?: number;
  phone?: number;
  price?: number;
  facility?: string;
  rating?: number;
  image?: string;
  image1?: string;
  image2?: string;
  image3?: string;
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

export interface UserType {
  id?: number;
  name?: string;
  photo_profile?: any;
}
