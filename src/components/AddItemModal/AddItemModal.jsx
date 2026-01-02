import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const defaultValues = {
    name: "",
    imageUrl: "",
    weatherType: "",
  };

  const { values, handleChange } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values);
  }

  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Add garment"
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          id="name"
          name="name"
          required
          type="text"
          className="modal__input"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          className="modal__input"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type-radio">
          <input
            type="radio"
            required
            id="hot"
            name="weatherType"
            className="modal__input modal__radio-input"
            value="hot"
            checked={values.weatherType === "hot"}
            onChange={handleChange}
          />{" "}
          Hot
        </label>

        <label htmlFor="warm" className="modal__label modal__label_type-radio">
          <input
            type="radio"
            name="weatherType"
            id="warm"
            className="modal__input modal__radio-input"
            value="warm"
            checked={values.weatherType === "warm"}
            onChange={handleChange}
          />{" "}
          Warm
        </label>

        <label htmlFor="cold" className="modal__label modal__label_type-radio">
          <input
            type="radio"
            name="weatherType"
            id="cold"
            className="modal__input modal__radio-input"
            value="cold"
            checked={values.weatherType === "cold"}
            onChange={handleChange}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
