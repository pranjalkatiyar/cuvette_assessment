import React, { useContext, useState } from "react";
import "./modal.css"; // Import your CSS for styling
import { IoIosArrowRoundForward } from "react-icons/io";
import { DataContext } from "../../context/DataContext";

const Modal = ({ closeModal, modal }) => {
  const { setRank, setCorrect, setPercentile } = useContext(DataContext);

  const handleSubmit = () => {
    closeModal();
  };

  return (
    <div className="modal_container">
      {modal && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-content">
              <div className="modal-section modal_heading">
                <h1>Update Scores</h1>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="./html5.svg"
                  alt="html5"
                />
              </div>

              <div className=" modal-column">
                <div
                  style={{
                    display: "flex",
                    margin: "1.5rem",
                    alignItems: "center"
                  }}
                >
                  <span className="modal_numberList">1</span>
                  <div className="modal_input_div">
                    <span>Update your Rank</span>
                    <input
                      type="number"
                      min="0"
                      onChange={(e) => setRank(e.target.value)}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    margin: "1.5rem",
                    alignItems: "center"
                  }}
                >
                  <span className="modal_numberList">2</span>
                  <div className="modal_input_div">
                    <span>Update your percentile</span>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      onChange={(e) => setPercentile(e.target.value)}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    margin: "1.5rem",
                    alignItems: "center"
                  }}
                >
                  <span className="modal_numberList">3</span>
                  <div className="modal_input_div">
                    <span>Update your current score</span>
                    <input
                      type="number"
                      min="0"
                      max="15"
                      onChange={(e) => setCorrect(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-section modal-column"></div>
            </div>
            <div className="modal_button_div">
              <button className="btn cancelBtn" onClick={closeModal}>
                Cancel
              </button>
              <button className="btn saveBtn" onClick={handleSubmit}>
                Save <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
