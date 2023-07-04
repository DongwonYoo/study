import Content from "./Content";
import styles from ".//Modal.module.css";

const Modal = ({ closeModal }) => {
  return (
    <div className={styles.main}>
      <button onClick={closeModal}>Close Modal</button>
      <Content />
    </div>
  );
};

export default Modal;
