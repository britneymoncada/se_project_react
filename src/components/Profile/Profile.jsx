import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

export default function Profile({
  clothingItems,
  onCardClick,
  onCardLike,
  onAddClick,
  onSignOut,
  onEditProfile,
}) {
  const currentUser = useContext(CurrentUserContext);

  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser._id,
  );

  return (
    <section className="profile">
      <SideBar onSignOut={onSignOut} onEditProfile={onEditProfile} />
      <ClothesSection
        onCardClick={onCardClick}
        clothingItems={userItems}
        onAddClick={onAddClick}
        onCardLike={onCardLike}
        currentUser={currentUser}
      />
    </section>
  );
}
