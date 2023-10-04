import { Link, useLocation } from 'react-router-dom';

function PortfolioLink({link, children}) {

  return (
      <div
      className='portfolio__link'
      >
      <Link
      to={link}
      target='_blank'
      className='portfolio__project-name link'
      >
        {children}
      </Link>

      <Link
      to={link}
      target='_blank'
      className='link'
      >
        ↗
      </Link>
      </div>
  );
}

export default PortfolioLink;
