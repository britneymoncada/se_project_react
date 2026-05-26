import "./ItemCard.css";

import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = (item.likes || []).some((like) => {
    return (like._id || like) === currentUser?._id;
  });

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  const handleLike = (e) => {
    e.stopPropagation();

    if (!currentUser?._id) {
      return;
    }

    onCardLike(item, isLiked);
  };

  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card" onClick={handleCardClick}>
      <div className="card__header">
        <p className="card__name">{item.name}</p>

        <button
          type="button"
          className={itemLikeButtonClassName}
          onClick={handleLike}
        />
      </div>

      <img src={item.imageUrl} alt={item.name} className="card__image" />
    </li>
  );
}

export default ItemCard;
