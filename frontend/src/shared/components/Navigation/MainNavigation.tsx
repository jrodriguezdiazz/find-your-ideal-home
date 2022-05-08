import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainHeader } from './MainHeader';

import './MainNavigation.css';

import { NavLinks } from './NavLinks';

export const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen);

  return (
    <Fragment>
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={toggleDrawer}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">find-your-ideal-home</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};
