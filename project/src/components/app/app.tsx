import React from 'react';
import { Header } from '../header/header';
import { LoginPage } from '../../pages/login';
import { MainPage } from '../../pages/main';

export default function App(): JSX.Element {
  return (
    <>
      <p>Hello, world!</p>
      <Header />
      <LoginPage />
      <MainPage />
    </>
  );
}
