import React, { useState } from "react";
import Chatbot from "./Chatbot/Chatbot";
import Modal from "./Modal/Modal";
import "./App.css";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="app">
      <button onClick={toggleModal} className="chatButton">
        💬
      </button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <Chatbot />
      </Modal>
    </div>
  );
}

export default App;
