import { BrowserRouter, NavLink } from "react-router-dom";
import React from "react";
import { MdExplore } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdFolder } from "react-icons/md";
import "../Styles/nav.css";
const Nav = () => {
  const w = window.innerWidth;
  return (
    <BrowserRouter forceRefresh={true}>
      <nav className="nav">
        {w > 1000 && (
          <div className="px-4">
            <h2 className="cursor-pointer">CookingHero</h2>
            <p className="text-red-600 text-md cursor-pointer text-sm mt-1">
              Log Out
            </p>
          </div>
        )}
        <ul className="flex justify-between w-full lg:flex-col lg:h-2/4 lg:pl-4 md:mr-4">
          <NavLink activeClassName="active" exact to="/" className="li">
            <MdExplore className="text-2xl" />
            Explore
          </NavLink>

          <NavLink
            exact
            to="/favourites"
            activeClassName="active"
            className="li"
          >
            <MdFavorite className="text-2xl" />
            Favourites
          </NavLink>

          <NavLink
            exact
            to="/categories"
            activeClassName="active"
            className="li"
          >
            <MdFolder className="text-2xl" />
            Categories
          </NavLink>
        </ul>
        {w > 400 && (
          <>
            <div className="profile">
              <p className="text-gray-900 text-xs pl-4">Folorunsho Ibrahim</p>
            </div>
          </>
        )}
      </nav>
    </BrowserRouter>
  );
};

export default Nav;
