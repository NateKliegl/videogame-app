import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HeroContext } from "../shared/HeroContext";

function Menu() {
  const { user, clearState } = useContext(HeroContext);
  return (
    <nav className="flex">
      {!user && (
        <header className="loginHeader">
          <NavLink className="link" to="/login">
            Login
          </NavLink>
          Find Your Favorite Super Heroes and Villains
        </header>
      )}
      {user && (
        <>
          <header className="header">
            Search Up To 700+ Heroes and Villains and Choose Your Favorites!
          </header>
          <NavLink className="link" to="/search">
            Search Page
          </NavLink>
          <NavLink className="link" to="/favorites">
            Favorite Heroes/Villains
          </NavLink>
          <button onClick={clearState} className="link">
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

export default Menu;
