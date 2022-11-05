import React from 'react';
import { MainPage } from '../../pages/main/main';
import { OffersCardInterface } from '../../types/offers-card-types';

type AppProps = {
  offersCard?: OffersCardInterface;
}

const App = ({ offersCard }: AppProps): JSX.Element => (
  <MainPage offersCards={offersCard} />
);

export default App;
