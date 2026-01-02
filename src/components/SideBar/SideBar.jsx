import "./SideBar.css";
import avatarDefault from "../../images/avatar.svg";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__user-container">
        <p className="sidebar__username">Terrance Tegegne</p>
        <img
          src={avatarDefault}
          alt="user avatar"
          className="sidebar__avatar"
        />
      </div>
    </aside>
  );
}
