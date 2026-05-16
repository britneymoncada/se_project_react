import "./SideBar.css";
import avatarDefault from "../../images/avatar.svg";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

export default function SideBar({ onSignOut, onEditProfile }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <aside className="sidebar">
      <div className="sidebar__user-container">
        <p className="sidebar__username">{currentUser.name || "User"}</p>

        <img
          src={currentUser.avatar || avatarDefault}
          alt="user avatar"
          className="sidebar__avatar"
        />
      </div>
      <button
        type="button"
        className="sidebar__edit-btn"
        onClick={onEditProfile}
      >
        Change profile data
      </button>

      <button
        type="button"
        className="sidebar__signout-btn"
        onClick={onSignOut}
      >
        Sign Out
      </button>
    </aside>
  );
}
