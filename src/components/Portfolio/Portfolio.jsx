import { Link, useLocation } from 'react-router-dom';
import PortfolioLink from './PortfolioLink';

function Portfolio() {

  return (
    <section
    className="portfolio"
    >
      <h3
      className="portfolio__title"
      >Портфолио</h3>

      <PortfolioLink>Статичный сайт</PortfolioLink>

      <PortfolioLink>Адаптивный сайт</PortfolioLink>

      <PortfolioLink>Одностраничное приложение</PortfolioLink>


    </section>
  );
}

export default Portfolio;
