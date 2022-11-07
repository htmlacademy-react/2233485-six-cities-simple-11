import React from 'react';
import { MainPage } from '../../pages/main/main';
import { offersCards } from '../../types/offers-cards';

const App = (): JSX.Element => (
  <MainPage offersCards={offersCards} />
);

export default App;
