import { OffersCardTypes, RatingStars, OffersCardInterface } from './offers-card-types';

export const offersCards: OffersCardInterface[] = [
  {
    id: '1',
    price: 120,
    isPremium: true,
    name: 'Beautiful &amp; luxurious studio at great location',
    img: 'img/apartment-01.jpg',
    ratingStars: RatingStars.fiveStar,
    type: OffersCardTypes.APARTMENT,
  },
];
