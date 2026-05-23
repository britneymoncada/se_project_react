import "./ItemModal.css";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import closeIcon from "../../images/modal__close.svg";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn =
    currentUser?._id && (card.owner?._id || card.owner) === currentUser._id;

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
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>

        <img src={card.imageUrl} alt={card.name} className="modal__image" />

        <div className="modal__footer">
          <div className="modal__footer-container">
            <p className="modal__caption">{card.name}</p>

            <p className="modal__weather">Weather: {card.weather}</p>
          </div>

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
      </div>
    </div>
  );
}

export default ItemModal;
