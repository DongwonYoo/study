import React, { useState } from "react";
import ModalBtn from "./Modal/ModalBtn";
import Modal from "./Modal/Modal";
import Page from "./Modal/Page";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <Page showModal={showModal} />
      {modalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};
export default Home;
