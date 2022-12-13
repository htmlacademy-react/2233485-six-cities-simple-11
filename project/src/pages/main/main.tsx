import { FC, useState } from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import Offer from '../../components/offer/offer';
import { OffersCardInterface } from '../../types/offers-card-types';

type MainPageProps = {
  offersCards: OffersCardInterface[];
}

const MainPage: FC<MainPageProps> = ({ offersCards }) => {
  const [openSort, setOpenSort] = useState(false);

  const handleSortOffer = () => {
    setOpenSort((prevState) => !prevState);
  };

  return(
    <>
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Nav/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <span className="places__sorting-type" tabIndex={0} onClick={handleSortOffer}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                {openSort && (
                  <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
                )}
              </form>
              <div className="cities__places-list places__list tabs__content">

                {offersCards.map((item) =>
                  <Offer key={item.id} dataOfferCard={item}/>
                )}

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
