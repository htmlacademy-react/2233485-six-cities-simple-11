import React, { FC } from 'react';
import { OffersCardInterface } from '../../types/offers-card-types';
import { Link } from 'react-router-dom';

interface OfferProps {
  dataOfferCard: OffersCardInterface;
}

export const Offer: FC<OfferProps> = ({ dataOfferCard }) => {
  const {
    price,
    isPremium,
    name,
    img,
    ratingStars,
    type,
  } = dataOfferCard;

  return (
    <article className="near-places__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to="/">
          <img className="place-card__image" src={img} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingStars}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/">{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};
