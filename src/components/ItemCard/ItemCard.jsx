import "./ItemCard.css";

import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes.some((id) => id === currentUser?._id);

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  const handleLike = () => {
    onCardLike(item, isLiked);
  };

  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <div className="card__header">
        <p className="card__name">{item.name}</p>

        {currentUser?._id && (
          <button
            type="button"
            className={itemLikeButtonClassName}
            onClick={handleLike}
          />
        )}
      </div>

      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
        onClick={handleCardClick}
      />
    </li>
  );
}

export default ItemCard;
