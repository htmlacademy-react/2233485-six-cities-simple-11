export enum OffersCardTypes {
  Room = 'Room',
  Apartment = 'Apartment',
  Studio = 'Studio',
}

export enum RatingStars {
  fiveStar = 100,
  fourStar = 80,
  threeStar = 60,
  twoStar = 40,
  oneStar = 20,
}

export interface OffersCardInterface {
  id: string;
  price: number;
  isPremium: boolean;
  name: string;
  img: string;
  ratingStars: RatingStars;
  type: OffersCardTypes;
}
