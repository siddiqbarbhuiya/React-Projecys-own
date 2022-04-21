import React from "react";

const Modal = ({ clickedImg, handleRotationRight, setClickedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };
  return (
    <div className="overlay dismiss" onClick={handleClick}>
      <img src={clickedImg} alt="bigger picture" />
      <span className="dismiss" onClick={handleClick}>
        X
      </span>
      <button
        onClick={handleRotationRight}
        className="overlay-arrows__left"
      >Prev</button>
      <button
        onClick={handleRotationRight}
        className="overlay-arrows__right"
      >Next</button>
    </div>
  );
};

export default Modal;
