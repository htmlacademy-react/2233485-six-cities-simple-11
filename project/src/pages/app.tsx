import React from 'react';
import { Header } from '../components/header/header';
import { LoginPage } from './login';
import { MainPage } from './main';
import {Paris} from '../components/cities/paris/paris';

const App: React.FC = () => (
  <>
    <Header />
    {/*<LoginPage />*/}
    {/*<MainPage />*/}
    <Paris />
  </>
);

export default App;
