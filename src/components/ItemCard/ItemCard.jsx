import "./ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike, currentUser }) {
  const isLiked = item.likes.some((id) => id === currentUser?._id);

  const itemLikeButtonClassName = `modal__like-button ${
    isLiked ? "modal__like-button_active" : ""
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

        <button
          type="button"
          className={itemLikeButtonClassName}
          onClick={handleLike}
        ></button>
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
