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

      <PortfolioLink link='https://github.com/GitNikolas/how-to-learn'>Статичный сайт</PortfolioLink>

      <PortfolioLink link='https://github.com/GitNikolas/russian-travel'>Адаптивный сайт</PortfolioLink>

      <PortfolioLink link='https://github.com/GitNikolas/react-mesto-api-full-gha'>Одностраничное приложение</PortfolioLink>


    </section>
  );
}

export default Portfolio;
