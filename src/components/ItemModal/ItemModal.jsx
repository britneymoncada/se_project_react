import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal__opened" : " "}`}
    >
      <div className="modal__content modal__content_type-image">
        <button
          className="modal__close"
          onClick={onClose}
          type="button"
        ></button>

        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-container">
            <h2 className="modal__caption">{card.name}</h2>

            <button
              className="modal__delete"
              type="button"
              onClick={() => {
                onDelete(card._id);
              }}
            >
              Delete item
            </button>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
