import "./ItemModal.css";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import closeIcon from "../../images/modal__close.svg";

function ItemModal({ activeModal, onClose, card, onDelete, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes?.some((id) => id === currentUser?._id);

  const itemLikeButtonClassName = `modal__like-button ${
    isLiked ? "modal__like-button_active" : ""
  }`;

  const handleLike = () => {
    onCardLike(card, isLiked);
  };
  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal__opened" : ""}`}
    >
      <div className="modal__content modal__content_type-image">
        <button className="modal__close" onClick={onClose} type="button">
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>

        <div className="modal__image-container">
          <img src={card.imageUrl} alt={card.name} className="modal__image" />

          <div className="modal__header">
            <p className="modal__caption">{card.name}</p>

            <button
              type="button"
              className={itemLikeButtonClassName}
              onClick={handleLike}
            />
          </div>
        </div>

        <div className="modal__footer">
          <div className="modal__footer-container">
            {isOwn && (
              <button
                className="modal__delete"
                type="button"
                onClick={() => {
                  onDelete(card._id);
                }}
              >
                Delete item
              </button>
            )}
          </div>

          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
