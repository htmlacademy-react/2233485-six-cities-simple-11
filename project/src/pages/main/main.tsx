import React, { FC } from 'react';
import { Header } from '../../components/header/header';
import { OffersCardInterface } from '../../types/offers-card-types';
import { Offer } from '../offer/offer';
import { Nav } from '../../components/nav/nav';

type MainPageProps = {
  offersCards: OffersCardInterface[];
}

export const MainPage: FC<MainPageProps> = ({ offersCards }) => (
  <main className="page__main page__main--index">
    <Header />
    <h1 className="visually-hidden">Cities</h1>
    <Nav />
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <form className="places__sorting" action="src/pages/main/main#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            {/*<span className="places__sorting-type" tabIndex="0">*/}
            <span className="places__sorting-type">
                Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                {/*<use xlink:href="#icon-arrow-select"></use>*/}
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              {/*<li className="places__option places__option--active" tabIndex="0">Popular</li>*/}
              <li className="places__option places__option--active">Popular</li>
              <li className="places__option">Price: low to high</li>
              <li className="places__option">Price: high to low</li>
              <li className="places__option">Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">

            {offersCards.map((item) =>
              <Offer key={item.id} dataOfferCard={item} />
            )}

          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  </main>
);
