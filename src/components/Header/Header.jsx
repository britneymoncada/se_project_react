import "./Header.css";
import logo from "../../images/logo.svg";
import avatarDefault from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  onLoginClick,
  onRegisterClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__nav-link">
          <img className="header__logo" src={logo} alt="WTWR Logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>

      <div className="header__nav">
        <ToggleSwitch />

        {/* ✅ NOT LOGGED IN */}
        {!isLoggedIn && (
          <>
            <button onClick={onRegisterClick} className="header__auth-btn">
              Sign Up
            </button>
            <button onClick={onLoginClick} className="header__auth-btn">
              Log In
            </button>
          </>
        )}

        {/* ✅ LOGGED IN */}
        {isLoggedIn && (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Add clothes
            </button>

            <NavLink className="header__nav-link" to="/profile">
              <div className="header__user-container">
                <p className="header__username">{currentUser.name || "User"}</p>

                <img
                  src={currentUser.avatar || avatarDefault}
                  alt="User avatar"
                  className="header__avatar"
                />
              </div>
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
