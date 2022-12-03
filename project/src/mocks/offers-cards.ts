import { OffersCardTypes, RatingStars, OffersCardInterface } from '../types/offers-card-types';

const offersCards: OffersCardInterface[] = [
  {
    id: '1',
    price: 120,
    isPremium: true,
    name: 'Beautiful & luxurious studio at great location',
    img: 'img/apartment-01.jpg',
    ratingStars: RatingStars.fourStar,
    type: OffersCardTypes.APARTMENT,
  },
  {
    id: '2',
    price: 80,
    isPremium: false,
    name: 'Wood and stone place',
    img: 'img/room.jpg',
    ratingStars: RatingStars.fourStar,
    type: OffersCardTypes.PRIVATE_ROOM,
  },
  {
    id: '3',
    price: 132,
    isPremium: false,
    name: 'Canal View Prinsengracht',
    img: 'img/apartment-02.jpg',
    ratingStars: RatingStars.fourStar,
    type: OffersCardTypes.APARTMENT,
  },
  {
    id: '4',
    price: 180,
    isPremium: true,
    name: 'Nice, cozy, warm big bed apartment',
    img: 'img/apartment-03.jpg',
    ratingStars: RatingStars.fiveStar,
    type: OffersCardTypes.APARTMENT,
  },
  // {
  //   id: '5',
  //   price: 80,
  //   isPremium: false,
  //   name: 'Wood and stone place',
  //   img: 'img/room.jpg',
  //   ratingStars: RatingStars.fourStar,
  //   type: OffersCardTypes.PRIVATE_ROOM,
  // },
];

export default offersCards;
