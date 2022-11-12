import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import styles from './_404.module.css';
import { Link } from 'react-router-dom';

export const PageNotFound = (): JSX.Element => (
  <div className={styles.container}>
    <Header />
    <section className={styles.wrapper}>
      <img src="img/image_404.jpg" alt="error_404" />
      <Link to="/">
        <span className={styles.text}>
          Go to home page
        </span>
      </Link>
    </section>
    <Footer />
  </div>
);
