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
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            className="modal__delete"
            type="button"
            onClick={() => {
              console.log("Deleting item with ID:", card._id); // Add this
              onDelete(card._id);
            }}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
