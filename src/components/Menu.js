import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HeroContext } from "../shared/HeroContext";

function Menu() {
  const { user, clearState } = useContext(HeroContext);
  return (
    <nav>
      {!user && (
        <NavLink className="link" to="/login">
          Login
        </NavLink>
      )}
      {user && (
        <>
          <NavLink className="link" to="/search">
            Search
          </NavLink>
          <NavLink className="link" to="/favorites">
            Favorites
          </NavLink>
          <button onClick={clearState}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Menu;
