import MainPage from '../../pages/main/main';
import offersCards from '../../mocks/offers-cards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import LoginPage from '../../pages/login/login';
import Room from "../../pages/room/room";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage offersCards={offersCards} />} />
        <Route path={'/room'} element={<Room />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
