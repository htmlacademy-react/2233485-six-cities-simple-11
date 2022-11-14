import Header from '../../components/header/header';
import styles from './page-not-found.module.css';

const PageNotFound = (): JSX.Element => (
  <div className={styles.container}>
    <Header />
    <section className={styles.wrapper}>
      <img src="img/image-404.jpg" alt="error_404" />
      <a href="/">
        <span className={styles.text}>
          Go to home page
        </span>
      </a>
    </section>
  </div>
);

export default PageNotFound;
