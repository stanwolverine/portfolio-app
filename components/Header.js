import React from 'react';
import Link from 'next/link';

const PRIMARY_COLOR = '#3f6fb9';
const YELLOW = 'rgb(255, 224, 0)';
const PRIMARY_COLOR_LIGHT = '#3f90b4';
const PRIMARY_COLOR_DARK = '#3f4bbe';
const LIGHT_SECONDARY_COLOR = '#3eafaf';
const TERTIARY_COLOR = '#5b40c2';

const Header = props => {
  const headerLinks = [
    { routeName: 'home', path: '/' },
    { routeName: 'contact', path: '/contact' },
    { routeName: 'about', path: '/about' },
    { routeName: 'projects', path: '#projects' }
  ];
  return (
    <>
      <header className='header'>
        <nav className='navigation'>
          <ul className='list'>
            {headerLinks.map(links => (
              <li key={links.path} className='link'>
                <Link href={links.path}>
                  <a className='anchor'>{links.routeName}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <h2 className='name-heading'>
          <a href='https://github.com/stanwolverine' target='_blank'>
            Jatin Nagar
          </a>
        </h2>
      </header>

      <style jsx>
        {`
          .header {
            font-family: Roboto;
            text-transform: capitalize;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.8);
            height: 5.5rem;
            color: #555;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: stretch;
          }

          .navigation {
            display: flex;
            align-items: stretch;
            flex-basis: 40%;
          }

          .list {
            display: flex;
            flex-basis: 100%;
            justify-content: space-around;
            align-items: stretch;
            list-style: none;
            text-decoration: none;
          }

          .link {
            display: flex;
            align-items: center;
            font-size: 1.7rem;
            letter-spacing: 1px;
            padding-left: 0.7rem;
            padding-right: 0.7rem;
            position: relative;
          }

          .link::after {
            content: '';
            height: 0.3rem;
            width: 0px;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: white;
            opacity: 0;
            transition: width 0.5s, opacity 0.5s;
          }

          .link:hover {
            color: rgb(242, 211, 87);
          }

          .link:hover::after {
            opacity: 1;
            width: 100%;
          }

          .anchor {
            text-decoration: none;
            color: inherit;
          }

          .name-heading {
            display: flex;
            align-items: center;
            font-size: 1.8rem;
            margin-right: 2rem;
            letter-spacing: 1px;
          }

          .name-heading a {
            cursor: pointer;
            color: inherit;
            text-decoration: none;
          }

          .name-heading a:hover {
            color: ${YELLOW};
          }
        `}
      </style>
    </>
  );
};

export default React.memo(Header);
