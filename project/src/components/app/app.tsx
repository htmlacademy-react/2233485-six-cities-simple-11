import Main from '../../pages/main/main';
import offersCards from '../../types/offers-cards';

const App = (): JSX.Element => (
  <Main offersCards={offersCards} />
);

export default App;
