import "./ItemModal.css";
import { useContext } from "react";

import CurrentUserContext from "../../context/CurrentUserContext";

import previewCloseIcon from "../../images/close-preview.svg";

function ItemModal({ activeModal, onClose, card, onDelete, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn =
    currentUser?._id && (card.owner?._id || card.owner) === currentUser._id;

  const isLiked = (card.likes || []).some((like) => {
    return (like._id || like) === currentUser?._id;
  });

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  const handleLike = () => {
    onCardLike(card, isLiked);
  };

  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal__opened" : ""}`}
    >
      <div className="modal__content modal__content_type-image">
        <button
          className="modal__close modal__close_type_preview"
          onClick={onClose}
          type="button"
        >
          <img
            src={previewCloseIcon}
            alt="Close"
            className="modal__close-icon"
          />
        </button>

        <img src={card.imageUrl} alt={card.name} className="modal__image" />

        <div className="modal__footer">
          <div className="modal__footer-container">
            <p className="modal__caption">{card.name}</p>

            <p className="modal__weather">Weather: {card.weather}</p>
          </div>

          {isOwn ? (
            <button
              className="modal__delete"
              type="button"
              onClick={() => {
                onDelete(card._id);
              }}
            >
              Delete item
            </button>
          ) : (
            <button
              type="button"
              className={itemLikeButtonClassName}
              onClick={handleLike}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
