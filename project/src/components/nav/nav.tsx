import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        <li className="locations__item">
          <Link className="locations__item-link tabs__item" to="src/pages/main/main#">
            <span>Paris</span>
          </Link>
        </li>
        <li className="locations__item">
          <Link className="locations__item-link tabs__item" to="src/pages/main/main#">
            <span>Cologne</span>
          </Link>
        </li>
        <li className="locations__item">
          <Link className="locations__item-link tabs__item" to="src/pages/main/main#">
            <span>Brussels</span>
          </Link>
        </li>
        <li className="locations__item">
          <Link className="locations__item-link tabs__item tabs__item--active" to="src/pages/main/main#">
            <span>Amsterdam</span>
          </Link>
        </li>
        <li className="locations__item">
          <Link className="locations__item-link tabs__item" to="src/pages/main/main#">
            <span>Hamburg</span>
          </Link>
        </li>
        <li className="locations__item">
          <Link className="locations__item-link tabs__item" to="src/pages/main/main#">
            <span>Dusseldorf</span>
          </Link>
        </li>
      </ul>
    </section>
  </div>
);
