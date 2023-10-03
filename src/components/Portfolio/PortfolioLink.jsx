import { Link, useLocation } from 'react-router-dom';

function PortfolioLink({children}) {

  return (
      <div
      className='portfolio__link'
      >
      <Link
      to='/'
      className='portfolio__project-name link'
      >
        {children}
      </Link>

      <Link
      to='/'
      className='link'
      >
        ↗
      </Link>
      </div>
  );
}

export default PortfolioLink;
