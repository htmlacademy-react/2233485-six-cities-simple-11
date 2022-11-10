import React from 'react';
import { MainPage } from '../../pages/main/main';
import { offersCards } from '../../types/offers-cards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageNotFound } from '../../pages/page_404/_404';
import { LoginPage } from '../../pages/login/login';
import { Offer } from '../../pages/offer/offer';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<MainPage offersCards={offersCards} />} />
      {/*<Route path="/offer" element={<Offer dataOfferCard={offersCards}/>} />*/}
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
