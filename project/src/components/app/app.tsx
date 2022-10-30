import React from 'react';
import { Header } from '../header/header';
import { LoginPage } from '../../pages/login';

export default function App(): JSX.Element {
  return (
    <>
      <p>Hello, world!</p>
      <Header />
      <LoginPage />
    </>
  );
}
