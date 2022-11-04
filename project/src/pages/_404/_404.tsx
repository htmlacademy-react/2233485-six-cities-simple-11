import { Header } from '../../components/header/header';
import styles from './_404.module.css';
import '../../image/three_404.jpg';

export const PageNotFound = (): JSX.Element => (
  <div className={styles.container}>
    <Header />
    <div className={styles.wrapper}>
      <div className={styles.image_404}>
        <img src="../../image/three_404.jpg" alt="page 404" />
      </div>
      {/*<Link to={}>*/}
      <span className={styles.text}>
          Go back to main page
      </span>
      {/*</Link>*/}
    </div>

  </div>
);
