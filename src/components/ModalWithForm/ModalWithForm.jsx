import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  secondaryButtonText,
  onSecondaryButtonClick,
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal__opened" : ""}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>

        <button
          type="button"
          className="modal__close"
          onClick={onClose}
        ></button>

        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          <div className="modal__button-container">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>

            {secondaryButtonText && (
              <button
                type="button"
                className="modal__secondary-button"
                onClick={onSecondaryButtonClick}
              >
                {secondaryButtonText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
