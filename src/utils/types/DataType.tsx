export interface DataTypes {}

export interface FeedbackProps {
  id: string;
  profil?: string;
  name?: string;
  rating?: number;
  ulasan?: string;
}

export interface Homestay {
  id: number;
  name: string;
  description: string;
  price: string;
}
