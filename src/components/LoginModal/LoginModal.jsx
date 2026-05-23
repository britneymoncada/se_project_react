import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const LoginModal = ({ isOpen, onClose, onLogin, onRegisterClick }) => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const { values, handleChange, resetForm } = useForm(defaultValues);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(values);
  };

  return (
    <ModalWithForm
      title="Log In"
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Log In"
      secondaryButtonText="or Sign Up"
      onSecondaryButtonClick={onRegisterClick}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          placeholder="Email"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>

      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          placeholder="Password"
          required
          value={values.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
