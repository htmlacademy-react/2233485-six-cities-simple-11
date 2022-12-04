import { OffersCardTypes, RatingStars, OffersCardInterface } from '../types/offers-card-types';

const offersCards: OffersCardInterface[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 10,
      },
    },
    price: 120,
    isPremium: true,
    type: OffersCardTypes.APARTMENT,
    img: 'img/apartment-01.jpg',
    ratingStars: RatingStars.fourStars,
    bedrooms: 3,
    location: {
      latitude: 52.22450804,
      longitude: 4.535795116,
      zoom: 8,
    },
    facilities: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine',
      'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      id: 1,
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
    },
    maxAdults: 4,
  },

  {
    id: 2,
    title: 'Wood and stone place',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris. The building is green and from 19th century',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.864716,
        longitude: 4.897070,
        zoom: 10,
      },
    },
    price: 80,
    isPremium: false,
    type: OffersCardTypes.PRIVATE_ROOM,
    img: 'img/room.jpg',
    ratingStars: RatingStars.fourStars,
    bedrooms: 1,
    location: {
      latitude: 48.51529776,
      longitude: 2.205645045,
      zoom: 8,
    },
    facilities: ['Wi-Fi', 'Towels', 'Heating', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      id: 1,
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
    },
    maxAdults: 3,
  },

  // {
  //   id: '3',
  //   price: 132,
  //   isPremium: false,
  //   name: 'Canal View Prinsengracht',
  //   img: 'img/apartment-02.jpg',
  //   ratingStars: RatingStars.fourStars,
  //   type: OffersCardTypes.APARTMENT,
  // },
  // {
  //   id: 4,
  //   price: 180,
  //   isPremium: true,
  //   title: 'Nice, cozy, warm big bed apartment',
  //   img: 'img/apartment-03.jpg',
  //   ratingStars: RatingStars.fiveStars,
  //   type: OffersCardTypes.APARTMENT,
  // },
];

export default offersCards;
