import MainPage from '../../pages/main/main';
import offersCards from '../../mocks/offers-cards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import LoginPage from '../../pages/login/login';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<MainPage offersCards={offersCards} />} />
      <Route path={'*'} element={<PageNotFound />} />
      <Route path={'/login'} element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
